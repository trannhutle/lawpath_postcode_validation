const yup = require("yup");

const postCodeValidationSchema = yup.object().shape({
  location: yup.string().label("Surburb").required().max(35),
  postcode: yup.number().label("Postcode").required().positive().typeError("Postcode must be number"),
  state: yup.string().label("State").required(),
});

module.exports = {
  postCodeValidationSchema,
};
