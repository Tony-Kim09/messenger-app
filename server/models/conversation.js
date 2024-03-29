const mongoose = require('mongoose')

//Rough Idea for Storing Messages for future purposes

const conversationSchema = new mongoose.Schema({
  //Will use Username as they are unique
    participants:{
      type: [{type: String}],
      required: true
    },
    messages: [{
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      message: String,
      createdOn: {
        type: Date,
        default: new Date("<YYYY-mm-ddTHH:MM:ss>")
      }
    }]
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