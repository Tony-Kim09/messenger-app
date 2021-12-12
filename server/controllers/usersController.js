const User = require("../models/User");

const getUsers = async (request, response) => {
  const username = request.body.username;
  const users = await User.find({ username: { $ne: username } });

  response.status(200).json(users);
}

const usersController = { getUsers };

module.exports = usersController;