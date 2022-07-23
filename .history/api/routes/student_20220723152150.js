const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({msg: 'api/router/student.js |GET'});
});

router.post('/', (req, res)=>{
    // res.status(200).json({msg: 'api/router/student.js |POST'});
    console.log(req.body);
});

module.exports = router;