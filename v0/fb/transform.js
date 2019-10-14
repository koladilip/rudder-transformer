const get = require("get-value");
const set = require("set-value");
const { EventType } = require("../../constants");
const { removeUndefinedValues } = require("../util");
const {
  baseMapping,
  eventNameMapping,
  eventPropsMapping,
  eventPropsToPathMapping
} = require("./config");

function processEventTypeGeneric(message, baseEvent, fbEventName) {
  const updatedEvent = { ...baseEvent };
  set(updatedEvent, "CUSTOM_EVENTS.0._eventName", fbEventName);

  Object.keys(message.properties).forEach(k => {
    if (eventPropsToPathMapping[k]) {
      var rudderEventPath = eventPropsToPathMapping[k];
      var fbEventPath = eventPropsMapping[rudderEventPath];

      if (rudderEventPath.indexOf("sub") > -1) {
        const [prefixSlice, suffixSlice] = rudderEventPath.split(".sub");
        const parentArray = get(message, prefixSlice);

        var length = 0;
        var count = parentArray.length;
        while (count > 0) {
          const intendValue = get(
            message,
            prefixSlice + "." + length + suffixSlice
          );
          set(updatedEvent, fbEventPath + length, intendValue || "");
          length++;
          count--;
        }
      } else {
        rudderEventPath = eventPropsToPathMapping[k];
        fbEventPath = eventPropsMapping[rudderEventPath];
        const intendValue = get(message, rudderEventPath);
        set(updatedEvent, fbEventPath, intendValue || "");
      }
    } else {
      set(updatedEvent, "CUSTOM_EVENTS.0." + k, message.properties[k]);
    }
  });

  // Conversion required fields
  const dateTime = new Date(get(updatedEvent, "CUSTOM_EVENTS.0._logTime"));
  set(updatedEvent, "CUSTOM_EVENTS.0._logTime", dateTime.getTime() / 1000);
  return updatedEvent;
}

function responseBuilderSimple(message, payload) {
  const requestConfig = {
    requestFormat: "FORM",
    requestMethod: "POST"
  };

  const { app_id, app_secret } = message.destination_props.Fb;

  // "https://graph.facebook.com/v3.3/644758479345539/activities?access_token=***REMOVED***

  const endpoint =
    "https://graph.facebook.com/v3.3/" +
    app_id +
    "/activities?access_token=" +
    app_id +
    "|" +
    app_secret;

  return {
    endpoint,
    requestConfig,
    userId: message.anonymousId,
    header: {},
    payload: removeUndefinedValues(payload)
  };
}

function buildBaseEvent(message) {
  const baseEvent = {};
  set(baseEvent, "extinfo.0", "a2");

  Object.keys(baseMapping).forEach(k => {
    const inputVal = get(message, k);
    set(baseEvent, baseMapping[k], inputVal || "");
  });
  return baseEvent;
}

function processSingleMessage(message) {
  let fbEventName;
  const baseEvent = buildBaseEvent(message);
  var eventName = message.event;
  let updatedEvent = {};

  switch (message.type) {
    case EventType.TRACK:
      fbEventName = eventNameMapping[eventName] || eventName;
      updatedEvent = processEventTypeGeneric(message, baseEvent, fbEventName);
      break;
    case EventType.SCREEN: {
      const { name } = message.properties;
      if (!name) {
        fbEventName = "Viewed Screen";
      } else {
        fbEventName = "Viewed " + name + " Screen";
      }
      updatedEvent = processEventTypeGeneric(message, baseEvent, fbEventName);
      break;
    }
    case EventType.PAGE:
      fbEventName = "Viewed Page";
      updatedEvent = processEventTypeGeneric(message, baseEvent, fbEventName);
      break;
    default:
      throw new Error("message type not supported");
  }

  return responseBuilderSimple(message, updatedEvent);
}

function process(events) {
  return events.map(event => {
    return processSingleMessage(event.message, event.destination);
  });
}

exports.process = process;
