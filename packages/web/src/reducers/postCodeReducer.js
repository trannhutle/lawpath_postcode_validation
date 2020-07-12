import { LOCATION_VALIDATION_ERROR, LOCATION_NOT_FOUND_ERROR } from "../action/validationAction";

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
};

const postcodeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOCATION_VALIDATION_ERROR:
      return {
        ...state,
        errors: {
          ...action.errors,
        },
      };
    case LOCATION_NOT_FOUND_ERROR:
      return {
        ...state,
        errors: {
          location: true,
        },
      };
    default:
      return state;
  }
};

export default postcodeReducer;
