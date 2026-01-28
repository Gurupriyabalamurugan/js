console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

//start and end printed(line by line execution) then hello after 2 seconds and thus runs 1 time

let c=0;
function start(){
 
    if(c==5){
        console.log("Completed");
        return;
        
    }
    c++;
    console.log(c);
    setTimeout(()=>{
        start()},2000)//recursice
}
start();
