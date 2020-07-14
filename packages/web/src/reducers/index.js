import { combineReducers } from "redux";
import postcodeReducer from "./postCodeReducer";
import globalReducer from "./globalReducer";

const combineReducer = combineReducers({
  postcode: postcodeReducer,
  global: globalReducer,
});

export default combineReducer;
