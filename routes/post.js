const express = require('express')
const router = express.Router()

const Post = require('../models/post.models')

//Get All
router.get('/',async (req,res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

//Add
router.post('/',async (req,res) => {
    const post = new Post({
        user_id: req.body.user_id,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body
    })
    try {
        const response = await post.save()
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})


//Update
router.put('/:id',async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
            post.user_id= req.body.user_id,
            post.date= req.body.date,
            post.time= req.body.time,
            post.title= req.body.title,
            post.body= req.body.body
        const response = await post.save()
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }

})

//Delete
router.delete('/:id',async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

//Get by User Id
router.get('/:id',async (req,res) => {
    try {
        const post=[await Post.find({user_id:req.params.id})]
        //This may return an array
        res.json(post)
    }catch (err) {
        res.send('Err: ' + err)
    }

})

module.exports=router