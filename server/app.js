const express = require("express");
require("express-async-errors")
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors")

const { connectToDB } = require("./db/connect");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");
const conversationRouter = require("./routes/conversation");

const { tokenExtractorAndValidator, errorHandler, unknownEndpoint } = require("./utils/middleware");

const { json, urlencoded } = express;

const app = express();

connectToDB();

app.use(cors());
app.use(express.static('build'));
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(tokenExtractorAndValidator);

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/messages", conversationRouter);

//For Testing Purposes Only
if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./routes/testing");
  app.use("/testing", testingRouter);
}

// catch 404 and forward to error handler
app.use(unknownEndpoint);

// general error handler
app.use(errorHandler);

module.exports = app;
