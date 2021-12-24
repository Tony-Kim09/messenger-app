const Conversation = require("../models/Conversation");

//Establish a way to get all conversation at once to improve scalability
const getAllConversationForUser = async (req, res) => {

}

//Creating new conversation
const create = async (req, res) => {
  const users = req.body.usernames;

  if (users.length < 2) {
    return res.status(400).json({ error: "Need 2 people to start a conversation" });
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
    return res.status(200).json(conversation);
  } else {
    const newConversation = new Conversation({ participants: users });
    const savedConversation = await newConversation.save();

    res.status(201).json(savedConversation);
  }
}

const saveMessage = async (req, res) => {

  const conversationID = req.params.conversationID;
  const message = { sender: req.userID, text: req.body.message };
  const updatedConversation = await Conversation.findOneAndUpdate({ _id: conversationID }, {
    $push: { messages: message },
    lastMessage: message
  },
    { new: true });
  res.status(200).json({ message: "Message Sent", messageObject: updatedConversation.lastMessage })
}

const conversationController = { create, saveMessage };

module.exports = conversationController;