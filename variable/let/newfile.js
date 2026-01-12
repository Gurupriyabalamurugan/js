// block
// {
//     let a = 10;
// }
// console.log(a);   //error

// function
function g1(){
    let a = 30;
    console.log(a); 
}
g1();
// global
let a;
function g(){
    a = 50;
}
g();
// let a=33; //SyntaxError: Identifier 'a' has already been declared
console.log(a); 
