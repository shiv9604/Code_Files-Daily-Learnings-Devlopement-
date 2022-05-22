const http = require("http");

let dt = require('./data');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'})
    res.write(JSON.stringify(dt));
    res.end();
}).listen(4800)