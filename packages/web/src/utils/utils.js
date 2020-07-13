import { setLocale } from "yup";
import { useTranslation } from "react-i18next";

export const isPostCodeMatchedLocation = (valueA, valueB) => {
  return parseInt(valueA) === parseInt(valueB);
};

export const isLocationMatchedState = (valueA, valueB) => {
  return valueA.toLowerCase() === valueB.toLowerCase();
};

export const locationValidator = (attributeValidators, locations, compareToLocation) => {
  const errors = {};
  // Get validators
  Object.keys(attributeValidators).map((validator) => {
    // Find the last match one
    const matchSurburb = locations.reduce((foundLocation, currentLocation) => {
      // Pass values for comparitor
      if (attributeValidators[validator](currentLocation[validator], compareToLocation[validator])) {
        return true;
      }
      return foundLocation;
    }, false);
    errors[validator] = !matchSurburb;
  });
  return errors;
};

export const SetLocalisation = () => {
  const { t } = useTranslation();
  setLocale({
    mixed: {
      required: t("postcode.errorMsgs.required"),
      notType: t("postcode.errorMsgs.notType"),
    },
    string: {
      max: t("postcode.errorMsgs.maxString"),
    },
    number: {
      positive: t("postcode.errorMsgs.positive"),
      type: t("postcode.errorMsgs.notType"),
    },
  });
};
