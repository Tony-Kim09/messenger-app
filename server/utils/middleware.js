const validationErrorHandler = (error, request, response, next) => {
    if (error.name === 'ValidationError') {
      return response.status(400).json({ error: "Please fill in all the blanks" })
    }
    next(error)
}

module.exports = {
    validationErrorHandler
}