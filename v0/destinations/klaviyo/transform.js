/* eslint-disable  array-callback-return */
const get = require("get-value");
const axios = require("axios");
const logger = require("../../../logger");
const { EventType } = require("../../../constants");
const {
  CONFIG_CATEGORIES,
  BASE_ENDPOINT,
  MAPPING_CONFIG,
  LIST_CONF
} = require("./config");
const {
  defaultRequestConfig,
  constructPayload,
  getFieldValueFromMessage,
  defaultGetRequestConfig,
  defaultPostRequestConfig,
  extractCustomFields,
  removeUndefinedValues
} = require("../../util");

// A sigle func to handle the addition of user to a list
// from an identify call.
// DOCS: https://www.klaviyo.com/docs/api/v2/lists
const addUserToList = async (message, conf, destination) => {
  let targetUrl = `${BASE_ENDPOINT}/api/v2/list/${get(
    message.context.traits.properties,
    "listId"
  )}`;
  let profile = {
    email: getFieldValueFromMessage(message, "email"),
    phone_number: getFieldValueFromMessage(message, "phone")
  };
  // If func is called as membership func else subscribe func
  if (conf === LIST_CONF.MEMBERSHIP) {
    targetUrl = `${targetUrl}/members`;
  } else {
    targetUrl = `${targetUrl}/subscribe`;
    profile.sms_consent = get(message.context.traits.properties, "smsConsent");
    profile.$consent = get(message.context.traits.properties, "consent");
  }
  profile = removeUndefinedValues(profile);
  try {
    const res = await axios.post(
      targetUrl,
      {
        api_key: destination.Config.privateApiKey,
        profiles: [profile]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    if (res.status !== 200) logger.error("Unable to add User to List");
  } catch (err) {
    logger.error(err);
  }
};
// ---------------------
// Main Identify request handler func
// internally it uses axios if membership and(or)
// subscription is enabled for that user to
// specific List.
// DOCS: https://www.klaviyo.com/docs/http-api
// ---------------------
const identifyRequestHandler = async (message, category, destination) => {
  // If listId property is present try to subscribe/member user in list
  if (get(message.context.traits.properties, "listId")) {
    addUserToList(message, LIST_CONF.MEMBERSHIP, destination);
    addUserToList(message, LIST_CONF.SUBSCRIBE, destination);
  }
  // actual identify call
  let propertyPayload = constructPayload(
    message,
    MAPPING_CONFIG[category.name]
  );
  // Extract other K-V property from traits about user custom properties
  propertyPayload = extractCustomFields(
    message,
    propertyPayload,
    ["traits", "context.traits"],
    [
      "email",
      "firstName",
      "lastName",
      "phone",
      "title",
      "organization",
      "city",
      "region",
      "country",
      "zip",
      "image",
      "timezone",
      "anonymousId",
      "userId",
      "properties"
    ]
  );
  const payload = {
    token: destination.Config.publicApiKey,
    properties: propertyPayload
  };
  const encodedData = Buffer.from(JSON.stringify(payload)).toString("base64");
  const response = defaultRequestConfig();
  response.endpoint = `${BASE_ENDPOINT}${category.apiUrl}?data=${encodedData}`;
  response.method = defaultGetRequestConfig.requestMethod;
  return response;
};
// ----------------------
// Main handler func for track request/screen request
// User info needs to be mapped to a track event (mandatory)
// DOCS: https://www.klaviyo.com/docs/http-api
// ----------------------
const trackRequestHandler = (message, category, destination) => {
  const payload = constructPayload(message, MAPPING_CONFIG[category.name]);
  payload.token = destination.Config.publicApiKey;
  payload.customer_properties = {
    $email: getFieldValueFromMessage(message, "email"),
    $phone_number: getFieldValueFromMessage(message, "phone")
  };
  const encodedData = Buffer.from(JSON.stringify(payload)).toString("base64");
  const response = defaultRequestConfig();
  response.endpoint = `${BASE_ENDPOINT}${category.apiUrl}?data=${encodedData}`;
  response.method = defaultGetRequestConfig.requestMethod;
  return response;
};

// ----------------------
// Main handlerfunc for group request
// we will map user to list (subscribe and/or member)
// based on property sent
// DOCS: https://www.klaviyo.com/docs/api/v2/lists
// ----------------------
const groupRequestHandler = async (message, category, destination) => {
  const targetUrl = `${BASE_ENDPOINT}/api/v2/list/${get(
    message,
    "groupId"
  )}/subscribe`;
  let profile;
  if (get(message.traits, "subscribe") === "true") {
    profile = constructPayload(message, MAPPING_CONFIG[category.name]);
    try {
      const res = await axios.post(
        targetUrl,
        {
          api_key: destination.Config.privateApiKey,
          profiles: [profile]
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (res.status !== 200) logger.error("Unable to add User to List");
    } catch (err) {
      logger.error(err);
    }
  }
  profile = {
    email: getFieldValueFromMessage(message, "email"),
    phone_number: getFieldValueFromMessage(message, "phone")
  };
  const payload = {
    api_key: destination.Config.privateApiKey,
    profiles: [profile]
  };
  const response = defaultRequestConfig();
  response.endpoint = `${BASE_ENDPOINT}/api/v2/list/${get(
    message,
    "groupId"
  )}/members`;
  response.headers = {
    "Content-Type": "application/json"
  };
  response.body.JSON = payload;
  response.method = defaultPostRequestConfig.requestMethod;
  return response;
};

// Main event processor using specific handler funcs
const processEvent = async (message, destination) => {
  if (!message.type) {
    throw Error("Message Type is not present. Aborting message.");
  }
  const messageType = message.type.toLowerCase();

  let category;
  let response;
  switch (messageType) {
    case EventType.IDENTIFY:
      category = CONFIG_CATEGORIES.IDENTIFY;
      response = await identifyRequestHandler(message, category, destination);
      break;
    case EventType.SCREEN:
    case EventType.TRACK:
      category = CONFIG_CATEGORIES.TRACK;
      response = trackRequestHandler(message, category, destination);
      break;
    case EventType.GROUP:
      category = CONFIG_CATEGORIES.GROUP;
      response = await groupRequestHandler(message, category, destination);
      break;
    default:
      throw new Error("Message type not supported");
  }
  return response;
};

const process = async event => {
  const result = await processEvent(event.message, event.destination);
  return result;
};

exports.process = process;
