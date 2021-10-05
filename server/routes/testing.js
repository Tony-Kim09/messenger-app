const testingRouter = require("express").Router();
const User = require("../models/user");
const Conversation = require("../models/conversation");

testingRouter.post("/reset", async (request, response) => {
    await User.deleteMany({});
    await Conversation.deleteMany({});
    
    response.status(204).end();
})

module.exports = testingRouter;