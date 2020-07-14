import { VALIDATE_LOCATION_POSTCODE, submitRequest, locationValidationError } from "../action/validationAction";
import { postPostcodeValidation } from "../services/postcodeValidationService";
import { locationValidator, isLocationMatchedState, isPostCodeMatchedLocation } from "../utils/utils";

const attributeValidators = {
  postcode: isPostCodeMatchedLocation,
  state: isLocationMatchedState,
};

/**
 * Middleware to check for validation of postcode details by
 * sending surburb name to backend to get list of location and check
 * the unput information is matched with the information form back-end
 *
 * @param {function} dispatch is a function to dispatch other actions in reducer
 * @param {function} getState is a function to get data in current state
 * @param {next} callback is a function to go trigger action
 * @param {object} callback is a object including required data sending from action
 */

export const postcodeFormValidation = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== VALIDATE_LOCATION_POSTCODE) {
    return next(action);
  }
  dispatch(
    submitRequest(postPostcodeValidation, action.details, (isSuccess, response) => {
      const errors = getState().postcode.errors;

      if (isSuccess) {
        let locations = response.data;
        const selectedLocation = action.details.location;

        /* Get locations having same name with input surburb */
        const filterLocations = locations.filter((location) => {
          return location.location.toLowerCase() === selectedLocation.toLowerCase();
        });

        if (filterLocations.length === 0) {
          /* When location is not found we do not need to show other errors */
          dispatch(locationValidationError({ ...errors, location: true }));
        } else {
          /* If the location is existed, check matching information from back-end and input informtion */
          const validationResult = locationValidator(attributeValidators, filterLocations, action.details);
          dispatch(locationValidationError({ ...errors, ...validationResult }, filterLocations));
        }
      } else {
        /* Trigger showing error message when sending messag to server unsuccessfully */
        dispatch(locationValidationError({ ...errors, submitFailed: true }));
      }
    })
  );
};
