const express = require('express');
const mongoose = require('mongoose');

const studentRoute = require('./api/routes/student');
const FacultyRoute = require('./api/routes/faculty');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017');

mongoose.connection.on('error', () {
    console.log('Connection fails');
});

mongoose.connection.on('connected', () =>{
    console.log('Connection connected');
});

app.use('/student', studentRoute);
app.use('/faculty', FacultyRoute);

app.use((req,res,next)=>{
    res.status(404).json({error:'bad request'});
});

module.exports = app;