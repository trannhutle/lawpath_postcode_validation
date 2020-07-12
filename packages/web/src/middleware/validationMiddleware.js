import {
  VALIDATE_LOCATION_POSTCODE,
  submitRequest,
  postcodeValidationError,
  locationNotFoundError,
} from "../action/validationAction";
import { postPostcodeValidation } from "../services/postcodeValidationService";

const isPostCodeMatchedLocation = (valueA, valueB) => {
  return parseInt(valueA) === parseInt(valueB);
};

const isLocationMatchedState = (valueA, valueB) => {
  return valueA.toLowerCase() === valueB.toLowerCase();
};

const attributeValidators = {
  postcode: isPostCodeMatchedLocation,
  state: isLocationMatchedState,
};

const astronautValidationErrors = (list, compareObject) => {
  const errors = {};
  // Get validators
  Object.keys(attributeValidators).map((validator) => {
    // Find the last match one
    const matchSurburb = list.reduce((foundLocation, currentLocation) => {
      // Pass values for comparitor
      if (attributeValidators[validator](currentLocation[validator], compareObject[validator])) {
        return true;
      }
      return foundLocation;
    }, false);
    errors[validator] = !matchSurburb;
  });
  return errors;
};

export const postcodeFormValidation = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== VALIDATE_LOCATION_POSTCODE) {
    return next(action);
  }
  dispatch(
    submitRequest(postPostcodeValidation, action.details, (response) => {
      let locations = response.data;
      const selectedLocation = action.details.location;

      const filterLocations = locations.filter((location) => {
        return location.location.toLowerCase() === selectedLocation.toLowerCase();
      });

      // Show error message if not found location
      console.log(filterLocations);
      if (filterLocations.length === 0) {
        dispatch(locationNotFoundError());
      } else {
        const validatioResult = astronautValidationErrors(filterLocations, action.details);
        console.log(validatioResult);
        dispatch(postcodeValidationError(validatioResult));
      }
    })
  );
};
