const conversationRouter = require("express").Router();
const conversationController = require("../controllers/conversationController");

//Route that makes new converstion
conversationRouter.post("/", async (req, res) => conversationController.create(req, res));

//Save messages to conversation using id
conversationRouter.post("/:conversationID", async (req, res) => conversationController.saveMessage(req, res));
module.exports = conversationRouter;