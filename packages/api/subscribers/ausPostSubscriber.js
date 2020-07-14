const ApiRequest = require("../services/apiRequest");
const dotenv = require("dotenv").config();

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
