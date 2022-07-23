const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({msg: 'Faculty |GET'});
});

router.post('/', (req, res)=>{
    res.status(200).json({msg: 'Faculty |POST'});
});

module.exports = router;