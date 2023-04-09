const fs = require('fs');
module.exports = function (directoryName,extensionString,callback)
{
    fs.readdir(directoryName,(err,list)=>{
        if(err) return callback(err,list);
        const dataList = list.filter(el=> el.split('.')[1]==extensionString);
        callback(err,dataList);
    });
}