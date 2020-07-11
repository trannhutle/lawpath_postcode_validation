const ApiRequest = require("../services/apiRequest");
const dotenv = require("dotenv").config();

const AUS_POST_POST_CODE_API = "https://digitalapi.auspost.com.au/postcode/search.json";

const findPostCode = async (surburb, state) => {
  let result;
  const request = new ApiRequest();
  await request.get(
    AUS_POST_POST_CODE_API,
    {
      "auth-key": process.env.AUS_POST_AUTH_KEY,
    },
    {
      "q": surburb,
      "state": state,
      "excludepostboxflag": false,
    },
    (response) => {
      result = response;
    }
  );
  console.log("This is the result ", result);
  return result;
};

module.exports = {
  findPostCode,
};
