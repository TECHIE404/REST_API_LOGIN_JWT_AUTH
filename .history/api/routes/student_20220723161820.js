const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');

router.get('/', (req, res)=>{
    Student.find().then(result=>{
        res.status(200).json({
            studentData: result
        })
    }).catch(error=>{
        res.status(500).json({error : error});
    })

});

router.get('/:id', (req, res)=>{
    Student.findById(req.params.id).then(result=>{
        res.status(200).json({"result" : result});
    }).catch(error=>{
        console.log(error);
        res.status(500).json({"error" : error});
    })
});

router.post('/', (req, res)=>{
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    });
    student.save().then(result =>{
        res.status(200).json({result : result})
    }).catch(error=>{
        console.log(error);
        res.status(500).json({error : error})
    });
    console.log("body",req.body);
});

router.delete('/:id', (req, res)=>{
    
});

module.exports = router;