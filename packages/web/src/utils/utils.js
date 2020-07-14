import { setLocale } from "yup";
import { useTranslation } from "react-i18next";

/**
 * Postcode comparator
 */
export const isPostCodeMatchedLocation = (postcodeA, postcodeB) => {
  return parseInt(postcodeA) === parseInt(postcodeB);
};

/**
 * State comparator
 */
export const isLocationMatchedState = (stateA, stateB) => {
  return stateA.toLowerCase() === stateB.toLowerCase();
};

/**
 * Location informtion matching validation.
 * It get all keys of location object to get the comparator and do the comparison
 *
 * @param {object} attributeValidators is an object including comparitor methods of fields of location
 * @param {array} locations is a array location object
 * @param {object} compareToLocation is an object including value need to compare
 */
export const locationValidator = (attributeValidators, locations, compareToLocation) => {
  const errors = {};

  /* Loop through the keys of the*/
  Object.keys(attributeValidators).map((validator) => {
    /* Find the last match one */
    const matchSurburb = locations.reduce((foundLocation, currentLocation) => {
      /* Get the comparitor function, and pass values to compare  */
      if (attributeValidators[validator](currentLocation[validator], compareToLocation[validator])) {
        return true;
      }
      return foundLocation;
    }, false);

    errors[validator] = !matchSurburb;
  });
  return errors;
};

/**
 * Reset localisation value
 */
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
