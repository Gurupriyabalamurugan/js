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
