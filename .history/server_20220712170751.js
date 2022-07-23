const http = require('http');
const server = http.createServer();

server.listen(3000,(err)=>{
    if(!err){
        console.log("Server is running");
    } else {
        console.log(err);
    }
}});