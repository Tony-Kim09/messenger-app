const sanitize = require("mongo-sanitize");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
  const body = req.body;

  //Check if password is at least 6 characters 
  const MINIMUM_PASSWORD_LENGTH = 6;
  if (body.password.length < MINIMUM_PASSWORD_LENGTH) {
    return res.status(400).json({ error: "password must be at least 6 characters long" });
  }

  //Hash and Salt password using Bcrypt
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);

  //Sanitize username then check if username already exists
  const requestedUsername = sanitize(body.username);
  const userExists = await User.findOne({ username: requestedUsername });
  if (userExists) {
    return res.status(400).json({ error: "Username already exists" })
  }

  //Sanitize email then check if the email is already used
  const requestedEmail = sanitize(body.email);
  const emailExists = await User.findOne({ email: requestedEmail });
  if (emailExists) {
    return res.status(400).json({ error: "Email has already been used" })
  }

  const name = sanitize(body.name);

  //Create New User
  const newUser = new User({
    username: requestedUsername,
    password: hashedPassword,
    email: requestedEmail,
    name: name
  });

  const savedUser = await newUser.save();

  const userForToken = {
    username: savedUser.username,
    id: savedUser._id
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(201).send({ token, name: savedUser.name, username: savedUser.username });
}

const registerController = { create };

module.exports = registerController;