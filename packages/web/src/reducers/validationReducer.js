import defaultState from "../store/defaultState";
import { SURBURB_POSTCODE_VALIDATION_ERROR } from "../action/validationAction";

const formValidationReducer = (state = defaultState, action) => {
  console.log("Go to formValidationReducer", state);
  switch (action.type) {
    case SURBURB_POSTCODE_VALIDATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors,
        },
      };
    default:
      return state;
  }
};

export default formValidationReducer;
