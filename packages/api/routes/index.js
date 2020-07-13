var express = require("express");
var router = express.Router();
const yup = require("yup");
const { postCodeFormValidation } = require("../middleware/validate");
const { validatePostCode } = require("../services/postcodeService");
const { getPostcostValidationSchema } = require("@lawpath/common");

router.get("/", (req, res, next) => {
  res.render("index", { title: "Expressss sss" });
});

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
    console.log(req.validData);
    validatePostCode(req.validData.location, (response) => {
      return res.status(200).json(response);
    });
  }
);

module.exports = router;
