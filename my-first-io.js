const fs = require('fs');
const buff  = fs.readFileSync(process.argv[2])
const str = buff.toString();
console.log(str.split('\n').length-1);
