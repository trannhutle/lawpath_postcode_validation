const ausPostSubscriber = require("../subscribers/ausPostSubscriber");

const validatePostCode = (surburb, state) => {
  return ausPostSubscriber.findPostCode(surburb, state);
};

module.exports = {
  validatePostCode,
};
