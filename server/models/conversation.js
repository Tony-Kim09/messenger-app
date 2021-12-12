const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const conversationSchema = new mongoose.Schema({
  //Will use Username as they are unique
  participants: {
    type: [{ type: String }],
    required: true
  },
  messages: {
    type: [messageSchema],
    default: [],
  },
  lastMessage: {
    type: messageSchema,
  }
})

conversationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;