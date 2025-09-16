const {Schema, model} = require('mongoose');
const Channel = new Schema({
    name: String,
    user: String,
    cratedAt: Date || new Date,
    status:{
        type:Boolean,
        default:true
    }
});

module.exports = model("Channels", Channel);