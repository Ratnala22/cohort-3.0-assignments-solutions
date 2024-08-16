const fs=require('fs');
fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) throw err;
  let info = data;
  info = info.split(" ");
  let info1=""
  for(let s of info){
    if(s!='')
    {
      info1+=s+" "
    }
  }
  fs.writeFile("demo.txt",info1,(err)=>{
    if(err){
      throw err;
    }
    console.log("file updated");
  })
});
