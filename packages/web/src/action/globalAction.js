export const TRIGGER_NOTIFICATION = "TRIGGER_NOTIFICATION";

/**
 * Is an action to change state to show/hide global error message
 * @param {boolean} isShow
 * @param {string} message
 */
export function triggerNofification(isShow, message) {
  return {
    type: TRIGGER_NOTIFICATION,
    isShow,
    message,
  };
}
