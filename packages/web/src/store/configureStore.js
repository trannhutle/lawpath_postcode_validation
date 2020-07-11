import { createStore, applyMiddleware, compose } from "redux";
import defaultState from "./defaultState";
import thunk from "redux-thunk";
import combineReducer from "../reducers";
import formValidationMiddleware from "../middleware/validationMiddleware";
import apiMiddleware from "../middleware/apiMiddleware";
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(combineReducer, composeEnhancers(applyMiddleware(thunk, formValidationMiddleware, apiMiddleware)));
};

export default configureStore;
