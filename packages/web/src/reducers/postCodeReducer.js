import { LOCATION_VALIDATION_ERROR, LOADING, RESET_ERROR } from "../action/validationAction";

const defaultState = {
  details: {
    location: "",
    postcode: "",
    state: "",
  },
  errors: {
    location: false,
    postcode: false,
    state: false,
    submitFailed: false,
  },
  success: false,
  loading: false,
};

/**
 * Global reducer handles updating states to trigger components subscribed postcode redux storage
 *
 * @param {object} state is an object including details about postcode storage
 * @param {object} action is an object including information sending from actions to update state
 */
const postcodeReducer = (state = defaultState, action) => {
  switch (action.type) {
    /* Set errors of validation location */
    case LOCATION_VALIDATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors,
        },
      };
    /* Show/Hide loading while sending request to back-end */
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    /* Reset errors object*/
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
