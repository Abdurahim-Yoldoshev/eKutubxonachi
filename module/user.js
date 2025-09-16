const {Schema,model} = require("mongoose");

const User =  new Schema({
    name:String,
    user:String,
    chatId:Number,
    action: String,
    createdAt: Date,
    role: {
        type: String,
        default: "User"
    },
    status: {
        type: Boolean,
        default: true
    },
});

module.exports = model("Users", User);