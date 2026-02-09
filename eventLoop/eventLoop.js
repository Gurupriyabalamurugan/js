console.log("Start");

setTimeout(function task1(){
  console.log("Macrotask: setTimeout");
}, 5000);

Promise.resolve().then(function p1() {
  console.log("Microtask: Promise 1");
});

Promise.resolve().then(function p2() {
  console.log("Microtask: Promise 2");
});

console.log("End");
