const ausPostSubscriber = require("../subscribers/ausPostSubscriber");

/**
 * Validate the postcode by sending api request to Australia Post to get information about surburb.
 * The return information will be filtered by "delivery area" category
 * because the orther category is used for other purpose
 *
 * It will return [] when location not found
 *
 * @param {string} location is a string manifesting a surburb location
 * @param {function} callback is a callback function to return data
 */
const validatePostCode = (location, callback) => {
  ausPostSubscriber.findPostCode(location, (response) => {
    var filteredLocals = [];
    const locals = response.data.localities;

    if (response.isSuccess && locals.hasOwnProperty("locality")) {
      /* localities.locality will be an object if there is only one locality */
      const locals = [].concat(response.data.localities.locality);

      /* Filter returned locations by "delivery area" category */
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
