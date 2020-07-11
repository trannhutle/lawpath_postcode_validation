const ausPostSubscriber = require("../subscribers/ausPostSubscriber");

const validatePostCode = (surburb, state, callback) => {
  ausPostSubscriber.findPostCode(surburb, state, (response) => {
    var filteredLocals = [];
    const locals = response.data.localities;

    if (response.isSuccess && locals.hasOwnProperty("locality")) {
      const locals = response.data.localities.locality;

      filteredLocals = locals.filter((local) => {
        return local.category.toLowerCase() === "delivery area";
      });
    }

    callback({ ...response, data: filteredLocals });
  });
};

module.exports = {
  validatePostCode,
};
