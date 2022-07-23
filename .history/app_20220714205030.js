const express = require('express');

const studentRoute = require('./api/routes/student');
const FacultyRoute = require('./api/routes/faculty');

const app = express();


app.use('/student', studentRoute);
app.use('/faculty', FacultyRoute);

app.use((req,res,next)=>{
    res.status(404).json({error:'URL not found'});
});

module.exports = app;