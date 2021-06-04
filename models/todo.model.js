const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: String,
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Todo', todoSchema)