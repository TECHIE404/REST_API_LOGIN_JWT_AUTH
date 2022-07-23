const http = require('http');
const app= require('./app');

const server = http.createServer(app);


server.listen(3000,(err)=>{
    if(!err){
        console.log("Server is running");
    } else {
        console.log(err);
    }
});

