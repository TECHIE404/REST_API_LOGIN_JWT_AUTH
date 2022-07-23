const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const studentRoute = require('./api/routes/student');
const userRoute = require('./api/routes/user');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017');

mongoose.connection.on('error', () =>{
    console.log('Connection fails');
});

mongoose.connection.on('connected', () =>{
    console.log('Connection connected');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/student', studentRoute);
app.use('/user', userRoute);

app.use((req,res,next)=>{
    res.status(404).json({error:'bad request'});
});

module.exports = app;