const ApiRequest = require("../services/apiRequest");
const dotenv = require("dotenv").config();

/**
 * A subscriber to send the API request to Austrlia post
 * @param {string} surburb is a string manifesting a surburb location
 * @param {function} callback is a callback function to return data
 */
const findPostCode = (surburb, callback) => {
  new ApiRequest().get(
    process.env.AUS_POST_POST_CODE_API,
    {
      "auth-key": process.env.AUS_POST_AUTH_KEY,
    },
    {
      q: surburb,
      excludepostboxflag: false,
    },
    callback
  );
};

module.exports = {
  findPostCode,
};
