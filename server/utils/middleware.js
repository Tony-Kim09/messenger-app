const jwt = require('jsonwebtoken');
const uploadStore = require('./uploads');
const multer = require("multer");

/*  Extract the token from the authorization header using bearer and set it 
    to request.token for future validation of user  */
const tokenExtractorAndValidator = (req, res, next) => {

  const authorization = req.get('authorization');

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7);
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.id) {
      return res.status(403).json({ error: 'token missing or invalid' });
    } else {
      req.userID = decodedToken.id;
    }
  }

  next();
};

//Error Checking for uploaded files
const uploadMiddleware = (req, res, next) => {

  const upload = uploadStore.single('avatar');
  upload(req, res, function (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).send('File too large');
    } else if (error) {

      if (error === 'filetype') {
        return res.status(400).send('Image files only');
      }
      //Unknown error
      return res.sendStatus(500);
    }
    next();
  });
};

const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: "that page does not exist" });
};

const errorHandler = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: "Please fill in all the blanks" });
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' });
  }

  // render the error page
  res.status(error.status || 500);
  res.json({ error: error });
}

module.exports = {
  unknownEndpoint,
  tokenExtractorAndValidator,
  errorHandler,
  uploadMiddleware
};