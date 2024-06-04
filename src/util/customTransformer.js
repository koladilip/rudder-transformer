const ivm = require('isolated-vm');
const { compileUserLibrary } = require('../util/ivmFactory');
const fetch = require('node-fetch');
const { getTransformationCode } = require('./customTransforrmationsStore');
const { getTransformationCodeV1 } = require('./customTransforrmationsStore-v1');
const { UserTransformHandlerFactory } = require('./customTransformerFactory');
const { parserForImport } = require('./parser');
const stats = require('./stats');
const { fetchWithDnsWrapper } = require('./utils');
const { getMetadata, getTransformationMetadata } = require('../v0/util');
const _ = require('lodash');

const ISOLATE_VM_MEMORY = parseInt(process.env.ISOLATE_VM_MEMORY || '128', 10);
const GEOLOCATION_TIMEOUT_IN_MS = parseInt(process.env.GEOLOCATION_TIMEOUT_IN_MS || '1000', 10);

async function runUserTransform(
  events,
  code,
  secrets,
  eventsMetadata,
  versionId,
  testMode = false,
) {
  // TODO: Decide on the right value for memory limit
  const isolate = new ivm.Isolate({ memoryLimit: ISOLATE_VM_MEMORY });
  const context = await isolate.createContext();
  const logs = [];
  const jail = context.global;
  // This make the global object available in the context as 'global'. We use 'derefInto()' here
  // because otherwise 'global' would actually be a Reference{} object in the new isolate.
  await jail.set('global', jail.derefInto());

  // The entire ivm module is transferable! We transfer the module to the new isolate so that we
  // have access to the library from within the isolate.
  await jail.set('_ivm', ivm);
  await jail.set(
    '_fetch',
    new ivm.Reference(async (resolve, ...args) => {
      try {
        const fetchStartTime = new Date();
        const res = await fetchWithDnsWrapper(versionId, ...args);
        const data = await res.json();
        stats.timing('fetch_call_duration', fetchStartTime, { versionId });
        resolve.applyIgnored(undefined, [new ivm.ExternalCopy(data).copyInto()]);
      } catch (error) {
        resolve.applyIgnored(undefined, [new ivm.ExternalCopy('ERROR').copyInto()]);
      }
    }),
  );

  await jail.set(
    '_fetchV2',
    new ivm.Reference(async (resolve, reject, ...args) => {
      try {
        const fetchStartTime = new Date();
        const res = await fetchWithDnsWrapper(versionId, ...args);
        const headersContent = {};
        res.headers.forEach((value, header) => {
          headersContent[header] = value;
        });
        const data = {
          url: res.url,
          status: res.status,
          headers: headersContent,
          body: await res.text(),
        };

        try {
          data.body = JSON.parse(data.body);
        } catch (e) {}

        stats.timing('fetchV2_call_duration', fetchStartTime, { versionId });
        resolve.applyIgnored(undefined, [new ivm.ExternalCopy(data).copyInto()]);
      } catch (error) {
        const err = JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));
        reject.applyIgnored(undefined, [new ivm.ExternalCopy(err).copyInto()]);
      }
    }),
  );

  await jail.set(
    '_geolocation',
    new ivm.Reference(async (resolve, reject, ...args) => {
      try {
        const geoStartTime = new Date();
        if (args.length < 1) {
          throw new Error('ip address is required');
        }
        if (!process.env.GEOLOCATION_URL) throw new Error('geolocation is not available right now');

        const res = await fetch(`${process.env.GEOLOCATION_URL}/geoip/${args[0]}`, {
          timeout: GEOLOCATION_TIMEOUT_IN_MS,
        });
        if (res.status !== 200) {
          throw new Error(`request to fetch geolocation failed with status code: ${res.status}`);
        }
        const geoData = await res.json();
        stats.timing('geo_call_duration', geoStartTime, { versionId });
        resolve.applyIgnored(undefined, [new ivm.ExternalCopy(geoData).copyInto()]);
      } catch (error) {
        const err = JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));
        reject.applyIgnored(undefined, [new ivm.ExternalCopy(err).copyInto()]);
      }
    }),
  );

  await jail.set('_rsSecrets', function (...args) {
    if (args.length == 0 || !secrets || !secrets[args[0]]) return 'ERROR';
    return secrets[args[0]];
  });

  jail.setSync('log', function (...args) {
    if (testMode) {
      let logString = 'Log:';
      args.forEach((arg) => {
        logString = logString.concat(` ${typeof arg === 'object' ? JSON.stringify(arg) : arg}`);
      });
      logs.push(logString);
    }
  });

  jail.setSync('metadata', function (...args) {
    const eventMetadata = eventsMetadata[args[0].messageId] || {};
    return new ivm.ExternalCopy(eventMetadata).copyInto();
  });

  const bootstrap = await isolate.compileScript(
    'new ' +
      `
    function() {
      // Grab a reference to the ivm module and delete it from global scope. Now this closure is the
      // only place in the context with a reference to the module. The 'ivm' module is very powerful
      // so you should not put it in the hands of untrusted code.
      let ivm = _ivm;
      delete _ivm;

      // Now we create the other half of the 'log' function in this isolate. We'll just take every
      // argument, create an external copy of it and pass it along to the log function above.
      let fetch = _fetch;
      delete _fetch;
      global.fetch = function(...args) {
        // We use 'copyInto()' here so that on the other side we don't have to call 'copy()'. It
        // doesn't make a difference who requests the copy, the result is the same.
        // 'applyIgnored' calls 'log' asynchronously but doesn't return a promise-- it ignores the
        // return value or thrown exception from 'log'.
        return new Promise(resolve => {
          fetch.applyIgnored(undefined, [
            new ivm.Reference(resolve),
            ...args.map(arg => new ivm.ExternalCopy(arg).copyInto())
          ]);
        });
      };

      let fetchV2 = _fetchV2;
      delete _fetchV2;
      global.fetchV2 = function(...args) {
        return new Promise((resolve, reject) => {
          fetchV2.applyIgnored(undefined, [
            new ivm.Reference(resolve),
            new ivm.Reference(reject),
            ...args.map(arg => new ivm.ExternalCopy(arg).copyInto())
          ]);
        });
      };

      let geolocation = _geolocation;
      delete _geolocation;
      global.geolocation = function(...args) {
        return new Promise((resolve, reject) => {
          geolocation.applyIgnored(undefined, [
            new ivm.Reference(resolve),
            new ivm.Reference(reject),
            ...args.map(arg => new ivm.ExternalCopy(arg).copyInto())
          ]);
        });
      };

      let rsSecrets = _rsSecrets;
      delete _rsSecrets;
      global.rsSecrets = function(...args) {
        return rsSecrets([
          ...args.map(arg => new ivm.ExternalCopy(arg).copyInto())
        ]);
      };

        return new ivm.Reference(function forwardMainPromise(
          fnRef,
          resolve,
          events
          ) {
            const derefMainFunc = fnRef.deref();
            Promise.resolve(derefMainFunc(events))
            .then(value => {
              resolve.applyIgnored(undefined, [
                new ivm.ExternalCopy(value).copyInto()
              ]);
            })
            .catch(error => {
              resolve.applyIgnored(undefined, [
                new ivm.ExternalCopy(error.message).copyInto()
              ]);
            });
          });
        }

        `,
  );

  // Now we can execute the script we just compiled:
  const bootstrapScriptResult = await bootstrap.run(context);

  const customScript = await isolate.compileScript(`${code}`);
  await customScript.run(context);
  const fnRef = await jail.get('transform', { reference: true });
  // eslint-disable-next-line no-async-promise-executor
  const executionPromise = new Promise(async (resolve, reject) => {
    const sharedMessagesList = new ivm.ExternalCopy(events).copyInto({
      transferIn: true,
    });
    try {
      await bootstrapScriptResult.apply(undefined, [
        fnRef,
        new ivm.Reference(resolve),
        sharedMessagesList,
      ]);
    } catch (error) {
      reject(error.message);
    }
  });
  let result;
  let transformationError;
  const invokeTime = new Date();
  try {
    const timeoutPromise = new Promise((resolve) => {
      const wait = setTimeout(() => {
        clearTimeout(wait);
        resolve('Timedout');
      }, 4000);
    });
    result = await Promise.race([executionPromise, timeoutPromise]);
    if (result === 'Timedout') {
      throw new Error('Timed out');
    }
  } catch (error) {
    transformationError = error;
    throw error;
  } finally {
    // release function, script, context and isolate
    fnRef.release();
    customScript.release();
    bootstrapScriptResult.release();
    context.release();
    isolate.dispose();

    const tags = {
      identifier: 'v0',
      errored: transformationError ? true : false,
      ...(events.length && events[0].metadata ? getMetadata(events[0].metadata) : {}),
      ...(events.length && events[0].metadata ? getTransformationMetadata(events[0].metadata) : {}),
    };

    stats.counter('user_transform_function_input_events', events.length, tags);
    stats.timing('user_transform_function_latency', invokeTime, tags);
  }

  return {
    transformedEvents: result,
    logs,
  };
}

async function userTransformHandler(
  events,
  versionId,
  libraryVersionIDs,
  trRevCode = {},
  credentials = [],
  testMode = false,
) {
  if (versionId) {
    const res = testMode ? trRevCode : await getTransformationCode(versionId);
    if (res) {
      // Events contain message and destination. We take the message part of event and run transformation on it.
      // And put back the destination after transforrmation
      const eventMessages = events.map((event) => event.message);
      const eventsMetadata = {};
      events.forEach((ev) => {
        eventsMetadata[ev.message.messageId] = ev.metadata;
      });
      const credentialsMap = {};
      if (testMode === false) {
        events[0]?.credentials?.forEach((cred) => {
          credentialsMap[cred.key] = cred.value;
        });
      } else {
        credentials?.forEach((cred) => {
          credentialsMap[cred.key] = cred.value;
        });
        events.forEach((ev) => {
          if (_.isNil(ev?.credentials)) {
            ev.credentials = credentials;
          }
        });
      }
      let userTransformedEvents = [];
      let result;
      if (res.codeVersion && res.codeVersion === '1') {
        result = await UserTransformHandlerFactory(res).runUserTransfrom(
          events,
          credentialsMap,
          testMode,
          libraryVersionIDs,
        );

        if (result.error) {
          throw new Error(result.error);
        }

        userTransformedEvents = result.transformedEvents;
        if (testMode) {
          userTransformedEvents = {
            transformedEvents: result.transformedEvents.map((ev) => {
              if (ev.error) {
                return { error: ev.error };
              }
              return ev.transformedEvent;
            }),
            logs: result.logs,
          };
        }
      } else {
        result = await runUserTransform(
          eventMessages,
          res.code,
          res.secrets || {},
          eventsMetadata,
          versionId,
          testMode,
        );

        userTransformedEvents = testMode
          ? result
          : result.transformedEvents.map((ev) => ({
              transformedEvent: ev,
              metadata: {},
            }));
      }
      return userTransformedEvents;
    }
  }
  return events;
}

async function setupUserTransformHandler(libraryVersionIDs, trRevCode = {}) {
  const resp = await UserTransformHandlerFactory(trRevCode).setUserTransform(libraryVersionIDs);
  return resp;
}

async function validateCode(code, language) {
  if (language === 'javascript') {
    return compileUserLibrary(code);
  }
  if (language === 'python' || language === 'pythonfaas') {
    return parserForImport(code, true, [], language);
  }

  throw new Error('Unsupported language');
}

async function extractLibraries(
  code,
  versionId,
  validateImports,
  additionalLibs,
  language = 'javascript',
  testMode = false,
) {
  if (language === 'javascript') return parserForImport(code);

  let transformation;

  if (versionId && !testMode) {
    transformation = await getTransformationCodeV1(versionId);
  }

  if (!transformation?.imports) {
    return parserForImport(code || transformation?.code, validateImports, additionalLibs, language);
  }

  return transformation.imports;
}

module.exports = {
  userTransformHandler,
  setupUserTransformHandler,
  validateCode,
  extractLibraries,
};
