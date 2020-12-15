const jwt = require("jsonwebtoken");
const sanitize = require("mongo-sanitize");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
    const body = request.body;

    //Sanitize Email
    const sanitizedEmail = sanitize(body.email);

    //Search for the username in the database 
    const user = await User.findOne({ email: sanitizedEmail });

    //If username does not exist, no need to check for password correctness
    //If it exists, compare the password using bcrypt
    const passwordIsCorrect = user === null 
                                ? false
                                : await bcrypt.compare(body.password, user.password);
                            
    //Send error if either user does not exist or password is incorrect
    //Additional security as hackers won't know which is incorrect

    if(!(user && passwordIsCorrect)) {
        return response.status(401).json({
            error: "invalid username or password"
        });
    }

    //Set up user object to sign Token. Id is used for unique identification
    const userToken = {
        username: user.username,
        id: user._id,
    };

    //Use the SECRET in .env to sign the token that expires in 7 days
    const token = jwt.sign(userToken, process.env.SECRET, { expiresIn: "7d" });

    //Respond with the token, username and name
    response
        .status(200)
        .send({ token, username: user.username, name: user.name});
})

module.exports = loginRouter;