const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,(req, res)=>{
    Student.find().then(result=>{
        res.status(200).json({
            studentData: result
        })
    }).catch(error=>{
        res.status(500).json({error : error});
    })

});

router.get('/:id',checkAuth,(req, res)=>{
    Student.findById(req.params.id).then(result=>{
        res.status(200).json({"result" : result});
    }).catch(error=>{
        console.log(error);
        res.status(500).json({"error" : error});
    })
});

router.post('/',checkAuth,(req, res)=>{
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

router.delete('/:id',checkAuth,(req, res)=>{
    Student.remove({_id:req.params.id}).then((result)=>{
        res.status(200).json({message: 'Student deleted successefully',result: result});
    }).catch(error=>{
        res.status(500).json({error : error, message: 'internal Server error'});
    })
}); 

router.put('/:id',checkAuth,(req, res)=>{
    console.log(req.params.id);
    Student.findOneAndUpdate({_id: req.params.id},{
        $set:{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
        }
    }).then(result=>{
        res.status(200).json({updated_product: result}); //value update by result will show old result
    }).catch(error=>{
        res.status(500).json({error : error, message: 'internal server error'})
    })
});

module.exports = router;