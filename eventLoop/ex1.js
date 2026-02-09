console.log("Start");

setTimeout(() => {
  console.log("Macrotask 1");

  Promise.resolve().then(() => {
    console.log("Microtask inside Macrotask");
  });
}, 5000);

Promise.resolve().then(function micro1() {
  console.log("Microtask 1");
});

Promise.resolve().then(function micro2() {
  console.log("Microtask 2");
});

console.log("End");
