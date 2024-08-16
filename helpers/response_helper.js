
export function sendResponse(res, data = null, message = '', statusCode = 200) {
    // Set default status code if not provided
    if (!statusCode) {
      statusCode = 200; // Default status code for success
    }
  
    const response = {
      status: statusCode >= 200 && statusCode < 300,
      message: message,
      data: data
    };
  
    res.status(statusCode).json(response);
  }
  