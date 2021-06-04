require('dotenv').config()
const mongoose = require('mongoose')
const Todo = require('../models/todo.model')

mongoose.connect(process.env.MONGODB_URL_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(async () => {
    await Todo.deleteMany()
}).then(() => mongoose.connection.close())