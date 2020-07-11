var express = require("express");
var router = express.Router();
const yup = require("yup");
const { postCodeFormValidation } = require("../middleware/validate");
const { validatePostCode } = require("../services/postcodeService");
const { postCodeValidationSchema } = require("@lawpath/common");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Expressss sss" });
});

/* GET home page. */
router.post(
  "/validatePostCode",
  postCodeFormValidation({
    shape: postCodeValidationSchema,
  }),
  (req, res, next) => {
    const surburb = req["body"]["surburb"];
    const postcode = req["body"]["postcode"];

    const resut = validatePostCode(surburb, postcode);
    console.log("this is the result ", resut);
    // return res.status(200).json(resut);
    return res.status(200).json({ Test: "Rafa" });
  }
);

module.exports = router;
