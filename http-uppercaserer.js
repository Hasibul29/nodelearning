const http = require('http');
const map = require('through2-map');

const server = http.createServer((request,responce)=>{
    if(request.method!=='POST')
        responce.end(console.log("ERROR"));
    request.pipe(map((chunk)=>{
        return chunk.toString().toUpperCase();
    })).pipe(responce);
})

server.listen(process.argv[2]);