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
const loginRouter = require("./routes/login")

const { tokenExtractor, errorHandler, unknownEndpoint, knownErrorHandler } = require("./utils/middleware");

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

app.use(tokenExtractor);

app.use("/", indexRouter);
app.use("/ping", pingRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

//catch 400/401 validation error and token error
app.use(knownErrorHandler);

// catch 404 and forward to error handler
app.use(unknownEndpoint);

// general error handler
app.use(errorHandler);

module.exports = app;
