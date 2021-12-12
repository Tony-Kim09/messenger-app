const Conversation = require("../models/Conversation");

const create = async (request, response) => {
  const users = request.body.usernames;

  if (users.length < 2) {
    return response.status(400).json({ error: "Need 2 people to start a conversation" });
  }

  //Check if conversation already exists
  const conversation = await Conversation.findOne({ participants: { $all: users } })
    .populate({
      path: "messages",
      populate: {
        path: "sender",
        model: "User",
        select: "username"
      },
    });

  if (conversation) {
    return response.status(200).json(conversation);
  } else {
    const newConversation = new Conversation({ participants: users });
    const savedConversation = await newConversation.save();

    response.status(201).json(savedConversation);
  }
}

const saveMessage = async (request, response) => {

  const conversationID = request.params.conversationID;
  const message = { sender: request.userID, text: request.body.message };
  const updatedConversation = await Conversation.findOneAndUpdate({ _id: conversationID }, {
    $push: { messages: message },
    lastMessage: message
  },
    { new: true });
  response.status(200).json({ message: "Message Sent", messageObject: updatedConversation.lastMessage })
}

const conversationController = { create, saveMessage };

module.exports = conversationController;