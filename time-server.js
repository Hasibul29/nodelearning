const net = require('net');
const strftime = require('strftime');
const server = net.createServer((socket)=>{
    let date = new Date();
    socket.write(strftime('%F %H:%M\n',date));
    socket.end();
})
server.listen(process.argv[2]); 
// event driven ,promise, async, repl typescript,reactnative,nextjs