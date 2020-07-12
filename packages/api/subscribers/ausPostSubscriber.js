const ApiRequest = require("../services/apiRequest");
const dotenv = require("dotenv").config();

const AUS_POST_POST_CODE_API = "https://digitalapi.auspost.com.au/postcode/search.json";

const findPostCode = (surburb, callback) => {
  new ApiRequest().get(
    AUS_POST_POST_CODE_API,
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
