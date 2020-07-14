export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const LOADING = "LOADING";
export const SUBMIT_REQUEST_FAILED = "SUBMIT_REQUEST_FAILED";
export const STATE_VALIDATION_ERROR = "STATE_VALIDATION_ERROR";
export const LOCATION_VALIDATION_ERROR = "LOCATION_VALIDATION_ERROR";
export const LOCATION_NOT_FOUND_ERROR = "LOCATION_NOT_FOUND_ERROR";
export const VALIDATE_LOCATION_POSTCODE = "VALIDATE_LOCATION_POSTCODE";
export const RESET_ERROR = "RESET_ERROR";

/**
 * Is an action to send API to backend
 * @param {string} api is a API name
 * @param {object} formData is a object including information required from backed
 * @param {function} callback is a callback function
 */
export function submitRequest(api, formData, callback) {
  return {
    type: SUBMIT_REQUEST,
    api,
    formData,
    callback,
  };
}

/**
 * Is an action to change state to show/hide of the loading component
 * @param {boolean} enabled
 */
export function loading(enabled) {
  return {
    type: LOADING,
    loading: enabled,
  };
}

/**
 * Is an action to trigger the postcode validadation middleware
 * @param {object} details is a object including input postcode informtion
 */
export function validateLocationPostcode(details) {
  return {
    type: VALIDATE_LOCATION_POSTCODE,
    details: details,
  };
}

/**
 * Is an action to change errors state to trigger error messages in postcode validation form
 * @param {object} errors is an object including errors: location, state and postcode
 */
export function locationValidationError(errors, foundLocations = []) {
  return {
    type: LOCATION_VALIDATION_ERROR,
    errors,
    foundLocations,
  };
}
/**
 * Is an action to reset the errors in state
 */
export function resetErrors() {
  return {
    type: RESET_ERROR,
  };
}
