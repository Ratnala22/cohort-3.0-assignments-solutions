const fs=require('fs');
fs.readFile("demo.txt",'utf8',(err,data)=>{
    if(err){
        console.log("Error in reading the file");
        return;
    }
    console.log(data);
})