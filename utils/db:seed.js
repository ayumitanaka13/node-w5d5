require('dotenv').config()
const mongoose = require('mongoose')
const Todo = require('../models/todo.model')

const dummyData = [
    { text: 'Eat sushi', done: true },
    { text: 'Buy toothbrush', done: true },
    { text: 'Learn Deno', done: false }
]

mongoose.connect(process.env.MONGODB_URL_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(async () => {
    await Todo.insertMany(dummyData)
}).then(() => mongoose.connection.close())