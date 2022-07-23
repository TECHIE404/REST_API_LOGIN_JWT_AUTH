const express = require('express');
const router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.get('/', (req, res)=>{
    res.status(200).json({msg: 'User listing'});
});

router.post('/', (req, res)=>{
    res.status(200).json({msg: 'post user'});
    bcrypt.hash(req.body.password,10,(err, hash)=>{
        if(err){
            return  res.status(500).json({error:err});
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                username: req.body.username,
                password: req.body.password,
                phone: req.body.phone,
                email: req.body.email,
                userType: req.body.userType
            })
        }
    })
});

module.exports = router;