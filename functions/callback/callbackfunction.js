function add(a, b) {
   console.log(a + b);
}
function multiply(a,b){
    console.log(a*b);
}
function calculate(x, y, operation) {
   operation(x, y);
}

calculate(5, 10, add);
calculate(12,5,multiply);
