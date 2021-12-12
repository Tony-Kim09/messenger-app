const jwt = require("jsonwebtoken");
const sanitize = require("mongo-sanitize");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const login = async (request, response) => {
  const body = request.body;

  const sanitizedEmail = sanitize(body.email);

  const user = await User.findOne({ email: sanitizedEmail });

  //Check for password if username exists
  const passwordIsCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.password);

  if (!(user && passwordIsCorrect)) {
    return response.status(401).json({
      error: "invalid username or password"
    });
  }

  //Set up object to sign Token with user id as it is unique
  const userToken = {
    username: user.username,
    id: user._id,
  };

  //Use the SECRET in .env to sign the token that expires in 7 days
  const token = jwt.sign(userToken, process.env.SECRET, { expiresIn: "7d" });
  console.log("can successfully log in")
  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
}

const loginController = { login };
module.exports = loginController;