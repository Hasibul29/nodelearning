const http = require('http');

const value = http.get(process.argv[2],(responce)=>{
    responce.on('data',(data)=>{
        console.log(data.toString());
    });
});