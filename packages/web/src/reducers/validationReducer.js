import { defaultState } from "../store/defaultState";
import { SURBURB_POSTCODE_VALIDATION_ERROR } from "../action/validationAction";

export default function formValidationReducer(state = defaultState, action) {
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
      state;
  }
}
