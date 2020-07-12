import { LOCATION_VALIDATION_ERROR, LOADING, RESET_ERROR } from "../action/validationAction";

const defaultState = {
  details: {
    location: "",
    postcode: undefined,
    state: "",
  },
  errors: {
    location: false,
    postcode: false,
    state: false,
  },
  success: false,
  loading: false,
};

const postcodeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOCATION_VALIDATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors,
        },
      };
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case RESET_ERROR:
      Object.keys(state.errors).map((key) => {
        state.errors[key] = false;
      });
      return {
        ...state,
        errors: {
          ...state.errors,
        },
      };
    default:
      return state;
  }
};

export default postcodeReducer;
