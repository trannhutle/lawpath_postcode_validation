export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const SUBMIT_REQUEST_FAILED = "SUBMIT_REQUEST_FAILED";
export const SURBURB_POSTCODE_VALIDATION_ERROR = "SURBURB_POSTCODE_VALIDATION_ERROR";

export function submitRequest(formData) {
  return {
    type: SUBMIT_REQUEST,
    formData,
  };
}
export function surburbPostcodeValidationError(error) {
  return {
    type: SURBURB_POSTCODE_VALIDATION_ERROR,
    error,
  };
}
