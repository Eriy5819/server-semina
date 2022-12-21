const {StatusCodes} = require("http-status-codes");
const CustomAPIError = require("../errors/custom-api-error");

class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unauthenticated;
