export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const SUBMIT_REQUEST_FAILED = "SUBMIT_REQUEST_FAILED";
export const STATE_VALIDATION_ERROR = "STATE_VALIDATION_ERROR";
export const LOCATION_VALIDATION_ERROR = "LOCATION_VALIDATION_ERROR";
export const LOCATION_NOT_FOUND_ERROR = "LOCATION_NOT_FOUND_ERROR";

export const VALIDATE_LOCATION_POSTCODE = "VALIDATE_LOCATION_POSTCODE";

export function submitRequest(api, formData, callback) {
  return {
    type: SUBMIT_REQUEST,
    api,
    formData,
    callback,
  };
}

export function validateLocationPostcode(details) {
  return {
    type: VALIDATE_LOCATION_POSTCODE,
    details: details,
  };
}

export function locationNotFoundError() {
  console.log("This function is called")
  return {
    type: LOCATION_NOT_FOUND_ERROR,
  };
}

export function postcodeValidationError(errors) {
  return {
    type: LOCATION_VALIDATION_ERROR,
    errors,
  };
}

export function stateValidationError(errors) {
  return {
    type: STATE_VALIDATION_ERROR,
    errors,
  };
}
