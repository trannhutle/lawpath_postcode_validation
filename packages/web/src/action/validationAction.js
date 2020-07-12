export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const LOADING = "LOADING";
export const SUBMIT_REQUEST_FAILED = "SUBMIT_REQUEST_FAILED";
export const STATE_VALIDATION_ERROR = "STATE_VALIDATION_ERROR";
export const LOCATION_VALIDATION_ERROR = "LOCATION_VALIDATION_ERROR";
export const LOCATION_NOT_FOUND_ERROR = "LOCATION_NOT_FOUND_ERROR";
export const VALIDATE_LOCATION_POSTCODE = "VALIDATE_LOCATION_POSTCODE";
export const RESET_ERROR = "RESET_ERROR";

export function submitRequest(api, formData, callback) {
  return {
    type: SUBMIT_REQUEST,
    api,
    formData,
    callback,
  };
}

export function loading(enabled) {
  return {
    type: LOADING,
    loading: enabled,
  };
}

export function validateLocationPostcode(details) {
  return {
    type: VALIDATE_LOCATION_POSTCODE,
    details: details,
  };
}

export function locationValidationError(errors) {
  return {
    type: LOCATION_VALIDATION_ERROR,
    errors,
  };
}

export function resetErrors() {
  return {
    type: RESET_ERROR,
  };
}
