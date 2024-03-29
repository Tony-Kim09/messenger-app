const conversationRouter = require("express").Router();
const Conversation = require("../models/conversation");

//Route that makes new converstion
conversationRouter.post("/", async (request, response) => {
  const users = request.body.usernames;

  if (users.length < 2){
    return response.status(400).json({ error: "Need 2 people to start a conversation"});
  }

  //Check if conversation already exists
  const conversation = await Conversation.findOne( {participants: { $all: users }} );

  if (conversation) {
    return response.status(200).json(conversation);
  } else {
    const newConversation = new Conversation({participants: users});
    const savedConversation = await newConversation.save();
    
    response.status(201).json(savedConversation);
  }
})

//Get conversation using its id
conversationRouter.get("/:id", async (request, response) => {
  const conversation = Conversation.findById(request.params);

  if (!conversation){
    return response.status(400).json( { error: "conversation does not exist"});
  }
  response.status(200).json({ message: request.params });
})

//Save messages to conversation using id
conversationRouter.post("/:id", async (request, response) => {
  const conversation = Conversation.findById(request.params);

  if (!conversation){
    return response.status(400).json( { error: "conversation does not exist"});
  }
  
  const messages = { message: response.body.messages }
})
module.exports = conversationRouter;