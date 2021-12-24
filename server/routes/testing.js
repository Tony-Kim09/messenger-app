const testingRouter = require("express").Router();
const User = require("../models/User");
const Conversation = require("../models/Conversation");

//Reset database
testingRouter.post("/reset", async (req, res) => {
    await User.deleteMany({});
    await Conversation.deleteMany({});

    res.status(204).end();
})

module.exports = testingRouter;