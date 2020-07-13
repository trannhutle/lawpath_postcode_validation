const yup = require("yup");

const getPostcostValidationSchema = ({ location, postcode, state }) => {
  return yup.object().shape({
    location: yup
      .string()
      .label(location ? location : "Surburb")
      .required()
      .max(35),
    postcode: yup
      .number()
      .label(postcode ? postcode : "Postcode")
      .required()
      .positive(),
    state: yup
      .string()
      .label(state ? state : "State")
      .required(),
  });
};

module.exports = {
  getPostcostValidationSchema,
};
