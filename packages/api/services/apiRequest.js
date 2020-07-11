const axios = require("axios");

const ResponseTemplate = {
  isSuccess: false,
  statusCode: 200,
  msg: "Sent request successfully",
  data: {},
};

module.exports = class ApiRequest {
  constructor() {
    let request = axios.create();
    request.interceptors.response.use(this.handleSuccess, this.handleError);
    this.request = request;
  }

  handleSuccess = (response) => {
    return { ...ResponseTemplate, data: response.data };
  };

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

  get = async (path, headers, params, callback) => {
    console.log("Header", headers)
    console.log("params", params)
    return this.request.get(path, { headers: headers, params: params }).then((response) => callback(response));
  };

  post = async (path, headers, payload, callback) => {
    return this.request
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: headers,
      })
      .then((response) => callback(response));
  };
}