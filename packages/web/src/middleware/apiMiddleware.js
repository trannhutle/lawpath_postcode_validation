import { SUBMIT_REQUEST } from "../action/validationAction";

const apiMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== SUBMIT_REQUEST) {
    return next(action);
  }
  
};
