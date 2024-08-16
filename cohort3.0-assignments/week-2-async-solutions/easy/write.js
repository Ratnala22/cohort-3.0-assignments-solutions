const fs=require('fs');
fs.writeFile("demo.txt","Hi This is Vinay",(err)=>{
    if(err){
        console.log("Error writing to the file");
        return;
    }
    console.log("File Saved!");

})