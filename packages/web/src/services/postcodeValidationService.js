import axios from "axios";

const HOST = "http://localhost";
const PORT = "3131";
const BACKEND_HOST = `${HOST}:${PORT}`;

export const postPostcodeValidation = (data) => {
  axios.post(`${BACKEND_HOST}/validatePostCode`, data).then((response) => {
    console.log(response);
  });
};
