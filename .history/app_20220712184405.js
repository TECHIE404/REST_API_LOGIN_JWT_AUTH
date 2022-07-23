const express = require('express');

const studentRoute = require('./api/routes/student');

const app = express();
app.use((req,res,next)=>{
    res.status(200).json({message:'app is running!'});
});
app.use('/student', studentRoute);

module.exports = app;