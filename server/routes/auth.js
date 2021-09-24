const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

//Register
router.post("/register", async (req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const repassword = req.body.repassword
    const newUser = new User({
        username:username,
        email:email,
        password:password,
        repassword:repassword,
        // password: CryptoJS.AES.encrypt(password,"Secret").toString(),
        // repassword: CryptoJS.AES.encrypt(repassword,"Secret").toString(),
    })
    try{

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
    
    
})

//LOGIN

router.post("/login",(req,res)=>{
    const {email,password} = req.body

    try{
        User.findOne({email:email},(err, user)=>{
            if(user){
                if(password===user.password){
                    res.send({message:"Login Succesfully",user:user})
                }else{
                    res.send({message:"Password did not match"})
                }
            }else{
                res.send({message:"user not registered"})
            }
        })

    }catch(err){
        res.status(500).json(err)

    }
})

module.exports = router