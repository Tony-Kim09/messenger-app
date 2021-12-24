const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required"],
        minlength: [3, "Minimum of 3 characters required"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: [true, "Name Required"]
    },
    email: {
        type: String,
        required: [true, "email required"]
    },
    avatar: {
        type: String
    }
});

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password; //passwords should not be revealed
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;