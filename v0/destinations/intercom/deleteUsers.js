const btoa = require("btoa");
const { send } = require("../../../adapters/network");
const { CustomError } = require("../../util");

const responseHandler = async (userAttributes, config) => {
  const { apiKey } = config;
  for (let i = 0; i < userAttributes.length; i++) {
    const uId = userAttributes[i].userId;
    if (!uId) {
      throw new CustomError("User id for deletion not present", 400);
    }
    const requestOptions = {
      method: "delete",
      url: `https://api.intercom.io/contacts/${uId}`,
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    };
    const resp = await send(requestOptions);
    if (!resp || !resp.response) {
      throw new CustomError("Could not get response", 500);
    }
    if (
      resp &&
      resp.response &&
      resp.response.response &&
      resp.response.response.status !== 200 &&
      resp.response.response.status !== 404 // this will be returned if user is not found. Will send successfull to server
    ) {
      throw new CustomError(
        resp.response.response.statusText || "Error while deleting user",
        resp.response.response.status
      );
    }
  }
  return { status: "successful" };
};
const processDeleteUsers = async event => {
  const { userAttributes, config } = event;
  const resp = await responseHandler(userAttributes, config);
  return resp;
};

module.exports = { processDeleteUsers };
