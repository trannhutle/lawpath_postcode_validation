import { SUBMIT_REQUEST, loading } from "../action/validationAction";
import { useTranslation } from "react-i18next";
import { triggerNofification } from "../action/globalAction";

/**
 * Is an API middleware wrapper to requests backend
 * 
 * @param {function} dispatch is a function to dispatch other actions in reducer
 * @param {function} getState is a function to get data in current state
 * @param {next} callback is a function to go trigger action
 * @param {object} callback is a object including required data sending from action
 */
const apiMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== SUBMIT_REQUEST) {
    return next(action);
  }

  dispatch(loading(true));

  action.api(action.formData, (isSuccess, response) => {
    dispatch(loading(false));

    /* Trigger callback function sent from action */
    action.callback(isSuccess, response);

    /* Display error popup messsage when submit to back-end unsucessfully */
    if (!isSuccess || !response.isSuccess) {
      dispatch(triggerNofification(true, "messages.errorRequestApi"));
    }
  });
};

export default apiMiddleWare;
