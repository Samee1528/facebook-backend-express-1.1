const express = require('express')
const mongoose = require('mongoose')

const user=require('./routes/user')
const posts=require('./routes/post')

const app = express()
const port = 5000

const url = 'mongodb://127.0.0.1/facebookclone'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())
app.use('/user', user)
app.use('/post',posts)


app.get('/', (req, res) => {
    res.send('get req came for / route')
})

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})