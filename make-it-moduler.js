const importedModule = require('./mymodule');
importedModule(process.argv[2],process.argv[3],(err,data)=>{
    if(err) return console.error(err);
    data.forEach(el=>console.log(el));
});