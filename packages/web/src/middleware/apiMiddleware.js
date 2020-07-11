import { SUBMIT_REQUEST } from "../action/validationAction";
import { postPostcodeValidation } from "../services/postcodeValidationService";

const apiMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== SUBMIT_REQUEST) {
    return next(action);
  }

  console.log("function is called", action.formData);
  postPostcodeValidation(action.formData);
};

export default apiMiddleWare;
