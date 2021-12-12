const conversationRouter = require("express").Router();
const conversationController = require("../controllers/conversationController");
//Route that makes new converstion
conversationRouter.post("/", async (request, response) => conversationController.create(request, response));

//Save messages to conversation using id
conversationRouter.post("/:conversationID", async (request, response) => conversationController.saveMessage(request, response));
module.exports = conversationRouter;