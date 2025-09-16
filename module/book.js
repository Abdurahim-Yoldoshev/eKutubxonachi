const {Schema, model} = require('mongoose');

const Book = new Schema({
    title: String,
    author: String,
    age: Number,
    genre: String,
    description: String,
    cratedAt: Date || new Date,
    status: {
        type:Boolean,
        default:false
    }
})

module.exports = model("Books", Book);