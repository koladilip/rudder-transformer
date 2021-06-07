const {
  getHashFromArray,
  getSuccessRespEvents,
  getErrorRespEvents,
  CustomError
} = require("../../util");

function getTopic(event) {
  const { message } = event;
  const { eventToTopicMap } = event.destination.Config;
  const hashMap = getHashFromArray(eventToTopicMap, "from", "to");

  return (
    (message.event ? hashMap[message.event.toLowerCase()] : null) ||
    hashMap[message.type.toLowerCase()] ||
    hashMap["*"]
  );
}

function process(event) {
  const topicId = getTopic(event);
  if (topicId) {
    return {
      message: event.message,
      userId: event.message.anonymousId,
      topicId
    };
  }
  throw new CustomError("No topic set for this event", 400);
}
const processRouterDest = async inputs => {
  if (!Array.isArray(inputs) || inputs.length <= 0) {
    const respEvents = getErrorRespEvents(null, 400, "Invalid event array");
    return [respEvents];
  }

  const respList = await Promise.all(
    inputs.map(async input => {
      try {
        return getSuccessRespEvents(
          await process(input),
          [input.metadata],
          input.destination
        );
      } catch (error) {
        return getErrorRespEvents(
          [input.metadata],
          error.response
            ? error.response.status
            : error.code
            ? error.code
            : 400,
          error.message || "Error occurred while processing payload."
        );
      }
    })
  );
  return respList;
};

module.exports = { process, processRouterDest };
