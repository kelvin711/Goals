function errorHandler(error, request, response, next) {
    // Log the error internally
    console.error(error);

    // Check if headers have already been sent
    if (response.headersSent) {
        // If so, delegate to the default Express error handler
        return next(error);
    }

    // If not, you can send your own response with status code and message
    const status = error.status || 500;
    const message = error.message || "Something went wrong!";

    // Send the error response
    response
        .status(status)
        .json({ error: message });
}

module.exports = errorHandler;
