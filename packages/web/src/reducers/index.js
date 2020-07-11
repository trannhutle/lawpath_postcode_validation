import { combineReducers } from "redux";
import formValidationReducer from "./validationReducer";

const combineReducer = combineReducers({
  formValidationReducer,
});

export default combineReducer;
