import axios from "axios";
import { BACKEND_HOST } from "@lawpath/common";
/**
 * Send request to back-end to check get find details about the input location
 *
 * @param {object} data is an object including input details of finding postcode
 * @param {function} callback is a callback function to return data
 */
export const postPostcodeValidation = (data, callback) => {
  axios
    .post(`${BACKEND_HOST}/validatePostCode`, data)
    .then((response) => {
      callback(true, response.data);
    })
    .catch((error) => {
      callback(false, error);
    });
};
