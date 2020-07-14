import { TRIGGER_NOTIFICATION } from "../action/globalAction";
const defaultState = {
  apiErrorMsg: {
    isShow: false,
    message: "Error message",
  },
};
/**
 * Global reducer handles updating states to trigger global components, for example, poppup messages, global messages
 *
 * @param {object} state is an object including details about global storage
 * @param {object} action is an object including information sending from actions to update state
 */
const globalReducer = (state = defaultState, action) => {
  switch (action.type) {
    /* Show error poppup message */
    case TRIGGER_NOTIFICATION:
      return { ...state, apiErrorMsg: { ...state.apiErrorMsg, isShow: action.isShow, message: action.message } };
    default:
      return state;
  }
};

export default globalReducer;
