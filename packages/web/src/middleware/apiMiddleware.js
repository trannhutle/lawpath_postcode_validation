import { SUBMIT_REQUEST, loading } from "../action/validationAction";

const apiMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== SUBMIT_REQUEST) {
    return next(action);
  }
  dispatch(loading(true));
  action.api(action.formData, (response) => {
    dispatch(loading(false));
    if (response.isSuccess) {
      action.callback(response);
    } else {
      console.log("There is error");
    }
  });
};

export default apiMiddleWare;
