const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({msg: 'User listing'});
});

router.post('/', (req, res)=>{
    res.status(200).json({msg: 'post user'});
});

module.exports = router;