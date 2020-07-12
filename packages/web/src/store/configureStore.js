import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducer from "../reducers";
import { postcodeFormValidation } from "../middleware/validationMiddleware";
import apiMiddleware from "../middleware/apiMiddleware";
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(
    combineReducer,
    composeEnhancers(applyMiddleware(thunk, postcodeFormValidation, apiMiddleware))
  );
};

export default configureStore;
