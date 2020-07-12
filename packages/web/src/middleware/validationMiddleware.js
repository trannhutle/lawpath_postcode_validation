import { VALIDATE_LOCATION_POSTCODE, submitRequest, locationValidationError } from "../action/validationAction";
import { postPostcodeValidation } from "../services/postcodeValidationService";
import { locationValidator, isLocationMatchedState, isPostCodeMatchedLocation } from "../utils/utils";

const attributeValidators = {
  postcode: isPostCodeMatchedLocation,
  state: isLocationMatchedState,
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
      const { errors } = {
        errors: getState().postcode.errors,
      };
      if (filterLocations.length === 0) {
        dispatch(locationValidationError({ ...errors, location: true }));
      } else {
        const validatioResult = locationValidator(attributeValidators, filterLocations, action.details);
        dispatch(locationValidationError({ ...errors, ...validatioResult }));
      }
    })
  );
};
