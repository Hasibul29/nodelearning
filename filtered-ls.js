const fs = require('fs');
const path = require('path');
const value = fs.readdir(process.argv[2],(err,list)=>{
    if(err) return console.log(err);
    // const dataList = list.filter(el=> el.split('.')[1]==process.argv[3]);
    // dataList.forEach(el=>console.log(el));
    list.forEach(el=>{
        if(path.extname(el)==`.${process.argv[3]}`)
            console.log(el);
    })
})