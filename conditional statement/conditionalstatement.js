let age=100;
if(age<=18){
    console.log("Not eligible to vote");
}
else if(age>100){
    console.log("Enter valid age");
}
else{
    console.log("Eligible to vote");
}

//type conversion
let value = true;
console.log((typeof value)); // boolean
value = String(value); // now value is a string "true"
console.log((typeof value));

//? operator
let newage=(age>100)?"Enter proper age":(age<18)?"Not eligible to vote":"Eligible for voting";
console.log(newage);
