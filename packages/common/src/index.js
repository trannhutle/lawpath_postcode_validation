const yup = require("yup");

const postCodeValidationSchema = yup.object().shape({
  location: yup.string().required().min(3).max(35),
  // postcode: yup.number().positive().required(),
  // state: yup.string().required(),
});

module.exports = {
  postCodeValidationSchema,
};
