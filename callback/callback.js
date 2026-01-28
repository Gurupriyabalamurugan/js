function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));    
console.log(calc(5, 3, mul));

//sync
let arr=['alpha','beta','charlie'];
arr.forEach((name)=>{
    console.log(name)
});

console.log("1");
setTimeout(()=>{
    console.log("actually 3 after delay")
},2000);
console.log("2")
