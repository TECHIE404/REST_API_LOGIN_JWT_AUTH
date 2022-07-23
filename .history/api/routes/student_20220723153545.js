const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');

router.get('/', (req, res)=>{
    res.status(200).json({msg: 'api/router/student.js |GET'});
});

router.post('/', (req, res)=>{
    // res.status(200).json({msg: 'api/router/student.js |POST'});
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    });
    console.log("body",req.body);
});

module.exports = router;