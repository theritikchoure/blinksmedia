// Static methods are used for utility functions that do not need to maintain state and can be called without creating an instance of the class.

class ResponseHandler {
  /**
   * Sends a success response.
   * @param {Object} res - Express response object
   * @param {number} statusCode - HTTP status code
   * @param {Object} data - Data to send in the response
   * @param {string} message - Optional message
   */
  static sendSuccessResponse(res, statusCode, data = {}, message = "Success") {
    res.status(statusCode).json({
      status: "success",
      message,
      data,
    });
  }

  /**
   * Sends an error response.
   * @param {Object} res - Express response object
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message
   * @param {Object} details - Optional error details
   */
  static sendErrorResponse(res, statusCode, message, details = {}) {
    res.status(statusCode).json({
      status: "error",
      message,
      details,
    });
  }
}

module.exports = ResponseHandler;
