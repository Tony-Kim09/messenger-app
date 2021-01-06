const mongoose = require('mongoose')

//Rough Idea for Storing Messages for future purposes

const messagesSchema = new mongoose.Schema({
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    recipient: String,
    message: String,
    date: new Date()
  })

  messagesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Messages', messagesSchema)