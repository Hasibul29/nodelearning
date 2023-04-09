const http = require('http');
const fs = require('fs');
const server = http.createServer((request,resopnce)=>{
    fs.createReadStream(process.argv[3]).pipe(resopnce);
})

server.listen(process.argv[2]);