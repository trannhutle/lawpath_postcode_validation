const yup = require("yup");

/**
 * Postcode body form validation middleware
 */
const postCodeFormValidation = ({ shape, path = "body" }) => async (req, res, next) => {
  try {
    const validData = await shape.validate(req[path], { abortEarly: false });
    req.validData = validData;
    return next();
  } catch (errors) {
    /* Format output error message */
    const errorObjs = [];
    errors.inner.forEach((e) => {
      errorObjs.push({
        name: e.path,
        message: e.message,
      });
    });
    return res.status(400).json(errorObjs);
  }
};

module.exports = {
  postCodeFormValidation,
};
