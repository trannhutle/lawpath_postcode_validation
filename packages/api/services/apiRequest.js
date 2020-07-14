const axios = require("axios");

const ResponseTemplate = {
  isSuccess: true,
  statusCode: 200,
  msg: "Sent request successfully",
  data: {},
};

/**
 * This is a API wrapper to handle sending request to other services.
 * by standardising the return response object
 */
module.exports = class ApiRequest {
  constructor() {
    let request = axios.create();
    request.interceptors.response.use(this.handleSuccess, this.handleError);
    this.request = request;
  }
  /**
   * Handle success response
   */
  handleSuccess = (response) => {
    return { ...ResponseTemplate, data: response.data };
  };

  /**
   * Handle error message of sending requests
   * @param {object} error
   */
  handleError = (error) => {
    switch (error.response.status) {
      case 404:
        return this.getErrorMessage(404, "Request is not found");
      default:
        return this.getErrorMessage(500, "Server is is error");
    }
  };

  getErrorMessage = (code, msg) => {
    return { ...ResponseTemplate, isSuccess: false, statusCode: code, msg: msg };
  };

  /**
   * Send get method
   *
   * @param {string} path url of the request
   * @param {object} headers header of the request
   * @param {object} params query param
   * @param {function} callback callback function
   */
  get = (path, headers, params, callback) => {
    this.request.get(path, { headers: headers, params: params }).then((response) => callback(response));
  };

  /**
   * Send post method
   *
   * @param {string} path url of the request
   * @param {object} headers header of the request
   * @param {object} formData form data
   * @param {function} callback callback function
   */
  post = async (path, headers, formData, callback) => {
    this.request
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: formData,
        headers: headers,
      })
      .then((response) => callback(response));
  };
};
