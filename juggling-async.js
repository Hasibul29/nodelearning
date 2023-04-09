const http = require('http');
const bl = require('bl');
let responces = [];
let count = 0;
function print(){
    responces.forEach((el)=>{
        console.log(el);
    })
}
for(let i=2;i<=4;i++)
{
    http.get(process.argv[i],(responce)=>{
        responce.pipe(bl((err,data)=>{
            if(err) return console.log(err);
            responces[count]=data.toString();
            count++;
            if(count==3) {
                responces.forEach((el)=>{
                    console.log(el);
                })
            }
        }))
    })
}
