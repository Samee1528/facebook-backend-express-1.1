const express = require('express')
const router = express.Router()

const User = require('../models/user.models')

//Get All
router.get('/',async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

//Add
router.post('/',async (req,res) => {
    const user = new User({
        first_name: req.body.first_name,
        sur_name: req.body.sur_name,
        Gender: req.body.Gender,
        date_of_birth: req.body.date_of_birth,
        password: req.body.password,
        contact: req.body.contact,
        email: req.body.email
    })
    try {
        const response = await user.save()
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

//Update
router.put('/:id',async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
            user.first_name= req.body.first_name,
            user.sur_name= req.body.sur_name,
            user.Gender= req.body.Gender,
            user.date_of_birth= req.body.date_of_birth,
            user.password= req.body.password,
            user.contact= req.body.contact,
            user.email= req.body.email

        const response = await user.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }

})

//Delete
router.delete('/:id',async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const response = await user.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

//Get by Id
router.get('/:id',async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

//Login
router.post('/:email/:password',async (req,res) => {
    try {
        const user=await User.find({email:req.params.email})
        for (let i = 0; i < user.length; i++) {
            if (user[i].password==req.params.password){
                res.send("Email and Password Matched")
            }
        }

    }catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports=router