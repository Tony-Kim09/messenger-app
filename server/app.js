const createError = require("http-errors");
const express = require("express");
require('express-async-errors')
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const config = require('./utils/config');

const indexRouter = require("./routes/index");
const pingRouter = require("./routes/ping");
const registerRouter = require("./routes/register");

const { validationErrorHandler } = require("./utils/middleware")

const { json, urlencoded } = express;

var app = express();

mongoose.connect(config.MONGODB_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false, 
  useCreateIndex: true 
})
        .then(() => {
          console.log("successfully connected to MongoDB");
        })
        .catch((error) => {
          console.log("There was an error connecting to MongoDB: ", error.message);
        })

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/ping", pingRouter);
app.use("/register", registerRouter);

//catch 400 validation error
app.use(validationErrorHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
