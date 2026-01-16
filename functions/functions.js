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
