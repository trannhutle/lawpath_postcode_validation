import { SUBMIT_REQUEST } from "../action/validationAction";
import { postPostcodeValidation } from "../services/postcodeValidationService";

const apiMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== SUBMIT_REQUEST) {
    return next(action);
  }
  action.api(action.formData, (response) => {
    if (response.isSuccess) {
      action.callback(response);
    } else {
      console.log("There is error");
    }
  });
};

export default apiMiddleWare;
