require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const Todo = require('./models/todo.model')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/todo', async (req,res) => {
    const todos = await Todo.find()
    res.send(todos)
})

app.post('/api/todo', async (req, res) => {
    const { text, done } = req.body

    const todo = new Todo({ text, done })

    try {
        const createdTodo = await todo.save()
        res.status(201).json(createdTodo)
    } catch (error) {
        res.status(422).send(error)
    }
})

app.patch('/api/todo/:id', async (req, res) => {
    const updatedTodo = await Todo.findOneAndUpdate(
        { _id: req.params.id }, 
        { done: req.body.done },
        { new: true }
    )
    res.send(updatedTodo)
})

mongoose.connect(process.env.MONGODB_URL_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    const PORT = process.env.PORT || 8080
    console.log('Connected to Database')
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}....`))
}).catch(err => console.error(err))