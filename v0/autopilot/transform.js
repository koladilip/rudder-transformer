const get = require("get-value");
const { EventType } = require("../../constants");
const { destinationConfigKeys, endpoints } = require("./config");
const { mapPayload } = require("./data/eventMapping");
const {
  defaultPostRequestConfig,
  updatePayload,
  removeUndefinedAndNullValues
} = require("../util");

function responseBuilder(payload, message, autoPilotConfig) {
  let endpoint;
  let requestConfig;

  switch (message.type) {
    case EventType.IDENTIFY:
      requestConfig = defaultPostRequestConfig;
      endpoint = endpoints.addContactUrl;
      break;
    case EventType.TRACK:
      requestConfig = defaultPostRequestConfig;
      endpoint = `${endpoints.triggerJourneyUrl}/${autoPilotConfig.triggerId}/contact/${message.context.traits.email}`;
      break;
    default:
      break;
  }

  const response = {
    endpoint,
    header: {
      autopilotapikey: `${autoPilotConfig.apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    requestConfig,
    userId: message.userId ? message.userId : message.anonymousId,
    payload: removeUndefinedAndNullValues(payload)
  };
  return response;
}

function getIdentifyPayload(message) {
  let rawPayload = {};
  let contact = {};

  const traits = get(message.context.traits) ? message.context.traits : null;

  if (traits != null) {
    Object.keys(traits).forEach(trait => {
      const value = traits[trait];
      const replaceKeys = mapPayload.identify.addContact;
      updatePayload(trait, replaceKeys, value, contact);
    });
  }

  rawPayload.contact = contact;
  return rawPayload;
}

function getTrackPayload(message) {
  let rawPayload = {};
  let propertiesObj = {};

  const properties = get(message.properties)
    ? Object.keys(message.properties)
    : null;

  if (properties != null) {
    properties.forEach(property => {
      propertiesObj[property] = message.properties[property];
    });
  }

  rawPayload.property = propertiesObj;
  return rawPayload;
}

function getTransformedJSON(message, autoPilotConfig) {
  let rawPayload;
  switch (message.type) {
    case EventType.TRACK:
      rawPayload = getTrackPayload(message);
      break;
    case EventType.IDENTIFY:
      rawPayload = getIdentifyPayload(message);
      break;
    default:
      break;
  }
  return { ...rawPayload };
}

function getDestinationKeys(destination) {
  let autoPilotConfig = {};
  const configKeys = Object.keys(destination.Config);
  configKeys.forEach(key => {
    switch (key) {
      case destinationConfigKeys.apiKey:
        autoPilotConfig.apiKey = `${destination.Config[key]}`;
        break;
      case destinationConfigKeys.triggerId:
        autoPilotConfig.triggerId = `${destination.Config[key]}`;
        break;
      default:
        break;
    }
  });
  return autoPilotConfig;
}

function process(event) {
  const autoPilotConfig = getDestinationKeys(event.destination);
  // TODO: Implement to accept multiple triggerId's.
  const properties = getTransformedJSON(event.message, autoPilotConfig);
  return responseBuilder(properties, event.message, autoPilotConfig);
}

exports.process = process;
