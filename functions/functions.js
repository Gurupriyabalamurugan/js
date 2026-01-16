let fun="mystring";
function myops(){
    let message="hello "+fun;
    console.log(message);  // outer variable is accessed by the function
}
myops();

let userName = 'John';
function showMessage() {
  userName = "Bob"; //  let->updated
  let message = 'Hello,' +userName;
  console.log(userName); // Bob 
  console.log(message);
}
console.log(userName); // john
showMessage();
console.log(userName); // updated after the function call only


let userName1 = 'Priya';
function showMessage1() {
  let userName1 = "Sri"; // local variable newly declared(function scoop)
  let message1 = 'Hello,'+userName1; // Sri
  console.log(message1);
}
showMessage1();
console.log(userName1);//global gets printed


//return 
function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 3);
console.log(result);

//params
function add(a,b){
    console.log(a+b);
}
add(5,10);

//default param
function greet(name = "User") {
    console.log("Hello " + name);
}
greet();
greet("Gurupriya");

//rest params
function sum(...nums) {
   console.log(nums);
}
sum(1,2,3,4);//arrays

//object as params
function showUser(user) {
   console.log(user.name, user.age);
}
showUser({ name: "Gurupriya", age: 20 });

//passing of arrays
function printArray(arr) {
   for(let i of arr) {
      console.log(i);
   }
}
printArray([10,20,30]);

