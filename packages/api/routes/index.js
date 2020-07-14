var express = require("express");
var router = express.Router();
const yup = require("yup");
const { postCodeFormValidation } = require("../middleware/validate");
const { validatePostCode } = require("../services/postcodeService");
const { getPostcostValidationSchema } = require("../schema/validations");

/**
 * Validate surburb information by using API from Australia Post to get details of surburbs in Australia
 */
router.post(
  "/validatePostCode",
  postCodeFormValidation({
    shape: getPostcostValidationSchema({
      location: "Surburb",
      state: "State",
      postcode: "Postcode",
    }),
  }),
  (req, res, next) => {
    validatePostCode(req.validData.location, (response) => {
      return res.status(200).json(response);
    });
  }
);

module.exports = router;
