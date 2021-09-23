const jwt = require('jsonwebtoken');

/*  Extract the token from the authorization header using bearer and set it 
    to request.token for future validation of user  */
const tokenExtractorAndValidator = (request, response, next) => {

  const authorization = request.get('authorization');
  
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7);
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!decodedToken.id){
      return response.status(403).json({ error: 'token missing or invalid'});
    }
  } 
  
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: "that page does not exist" });
};

const errorHandler = (error, request, response, next) => {
    if (error.name === 'ValidationError') {
      return response.status(400).json({ error: "Please fill in all the blanks" });
    } else if (error.name === 'JsonWebTokenError') {
      return response.status(401).json({ error: 'invalid token'});
    }

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
}

module.exports = {
  unknownEndpoint,
  tokenExtractorAndValidator,
  errorHandler
};