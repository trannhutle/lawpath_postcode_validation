import { combineReducers } from "redux";
import postcodeReducer from "./postCodeReducer";

const combineReducer = combineReducers({
  postcode: postcodeReducer,
});

export default combineReducer;
