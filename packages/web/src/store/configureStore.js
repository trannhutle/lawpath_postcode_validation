import { createStore, applyMiddleware, compose } from "redux";
import { defaultState } from "formDefault";
import { formValidationMiddleware } from "../middleware/validationMiddleware";
// let composeEnhancers =
//   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

export default function configureStore() {
  return createStore(defaultState, applyMiddleware(formValidationMiddleware));
}
