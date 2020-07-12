const ausPostSubscriber = require("../subscribers/ausPostSubscriber");

const validatePostCode = (location, callback) => {
  ausPostSubscriber.findPostCode(location, (response) => {
    var filteredLocals = [];
    const locals = response.data.localities;

    if (response.isSuccess && locals.hasOwnProperty("locality")) {
      // localities.locality will be an object if there is only one locality
      const locals = [].concat(response.data.localities.locality);

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
