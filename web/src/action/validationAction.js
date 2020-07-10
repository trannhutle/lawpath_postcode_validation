export function submitRequest(formData) {
  return {
    type: "SUBMIT_REQUEST",
    formData,
  };
}
export function submitRequestSuccess(message) {
  return {
    type: "REQUEST_SUCCESS",
    message,
  };
}
export function submitRequestFailed(message) {
  return {
    type: "SUBMIT_REQUEST_FAILED",
    message,
  };
}
export function surburbPostcodeValidationError(error) {
  return {
    type: "SURBURB_POSTCODE_VALIDATION_ERROR",
    error,
  };
}
