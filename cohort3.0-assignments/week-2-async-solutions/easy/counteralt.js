let n=15;
for(let i=1;i<=n;i+=1){
    setTimeout(function test(){
        console.log(i);
    },i*1000);
}