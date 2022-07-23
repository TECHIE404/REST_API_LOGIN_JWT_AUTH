const http = require('http');
const port = process.env.PORT || 3000;
const app= require('./app');

const server = http.createServer(app);


server.listen(port,(err)=>{
    if(!err){
        console.log("Server is running");
    } else {
        console.log(err);
    }
});

