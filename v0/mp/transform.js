const get = require("get-value");
const set = require("set-value");
const { EventType } = require("../../constants");
const { removeUndefinedValues } = require("../util");
const { ConfigCategory, mappingConfig } = require("./config");

const mPIdentifyConfigJson = mappingConfig[ConfigCategory.IDENTIFY.name];

function getEventTime(message) {
  return new Date(message.timestamp).toISOString();
}

function responseBuilderSimple(parameters, message, eventType) {
  let endpoint = "http://api.mixpanel.com/engage/";
  if (eventType !== EventType.IDENTIFY) {
    endpoint = "http://api.mixpanel.com/track/";
  }

  const encodedData = Buffer.from(
    JSON.stringify(removeUndefinedValues(parameters))
  ).toString("base64");

  return {
    endpoint,
    userId: message.anonymousId,
    requestConfig: {
      requestFormat: "PARAMS",
      requestMethod: "POST"
    },
    header: {},
    payload: {
      data: encodedData
    }
  };
}

function processRevenueEvents(message, destination) {
  const revenueValue = message.properties.revenue;
  const transactions = {
    $time: getEventTime(message),
    $amount: revenueValue
  };
  const parameters = {
    $append: { $transactions: transactions },
    $token: destination.Config.apiKey,
    $distinct_id: message.userId ? message.userId : message.anonymousId
  };

  return responseBuilderSimple(parameters, message, "revenue");
}

function getEventValueForTrackEvent(message, destination) {
  const properties = {
    ...message.properties,
    token: destination.Config.apiKey,
    distinct_id: message.userId ? message.userId : message.anonymousId,
    time: message.timestamp
  };

  const parameters = {
    event: message.event,
    properties
  };

  return responseBuilderSimple(parameters, message, "track");
}

function processTrack(message, destination) {
  if (message.properties.revenue) {
    return processRevenueEvents(message, destination);
  }
  return getEventValueForTrackEvent(message, destination);
}

function getTransformedJSON(message, mappingJson) {
  const rawPayload = {};

  const sourceKeys = Object.keys(mappingJson);
  sourceKeys.forEach(sourceKey => {
    set(rawPayload, mappingJson[sourceKey], get(message, sourceKey));
  });
  return rawPayload;
}

function processIdentifyEvents(message, eventName, destination) {
  const properties = getTransformedJSON(message, mPIdentifyConfigJson);
  const parameters = {
    $set: properties,
    $token: destination.Config.apiKey,
    $distinct_id: message.userId ? message.userId : message.anonymousId
  };
  return responseBuilderSimple(parameters, message, eventName);
}

function processPageOrScreenEvents(message, eventName, destination) {
  const properties = {
    ...message.properties,
    token: destination.Config.apiKey,
    distinct_id: message.userId ? message.userId : message.anonymousId,
    time: message.timestamp
  };

  const parameters = {
    event: eventName,
    properties
  };
  return responseBuilderSimple(parameters, message, eventName);
}

function processSingleMessage(message, destination) {
  switch (message.type) {
    case EventType.TRACK:
      return processTrack(message, destination);
    case EventType.SCREEN:
    case EventType.PAGE: {
      const name = message.type;
      return processPageOrScreenEvents(message, name, destination);
    }
    case EventType.IDENTIFY:
      return processIdentifyEvents(message, message.type, destination);
    default:
      console.log("could not determine type");
      return {
        statusCode: 400,
        error: "message type " + message.type + " is not supported"
      };
  }
}

function process(events) {
  const respList = [];
  events.forEach(event => {
    try {
      const resp = processSingleMessage(event.message, event.destination);
      if (!resp.statusCode) {
        resp.statusCode = 200;
      }
      respList.push(resp);
    } catch (error) {
      console.error("MP: ", error);
    }
  });
  return respList;
}
exports.process = process;
