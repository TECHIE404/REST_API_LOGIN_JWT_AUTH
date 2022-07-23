const express = require('express');

const studentRoute = require('./api/routes/student');

const app = express();


app.use('/student', studentRoute);

app.use((req,res,next)=>{
    res.status(200).json({message:'app is running!'});
});

module.exports = app;