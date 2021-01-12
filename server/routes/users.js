const usersRouter = require("express").Router();
const User = require("../models/user");

//Simple get request to obtain all current users
usersRouter.get("/", async(request, response) => {
  const users = await User.find({});
  response.json(users);
})

module.exports = usersRouter;