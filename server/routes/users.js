const usersRouter = require("express").Router();
const User = require("../models/user");

//Simple get request to obtain all current users
usersRouter.post("/", async(request, response) => {
  const username = request.body.username;
  const users = await User.find({ username: { $ne: username }});

  response.status(200).json(users);
})

module.exports = usersRouter;