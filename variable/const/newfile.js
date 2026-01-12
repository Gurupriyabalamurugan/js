{
    const a = 10;
}
console.log(a);   //error
// function
function g1(){
    const a = 30;
    console.log(a);   
}
g1();
// global
const a = 50;
function g(){
    // a = 60;  //error no reassigning
}
g();
console.log(a); 
