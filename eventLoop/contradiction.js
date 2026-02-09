console.log("Start");

setTimeout(() => {
  console.log("Macrotask 1");

  Promise.resolve().then(() => {
    console.log("Microtask inside Macrotask");
  });
}, 5000);

Promise.resolve().then(() => {
  console.log("Microtask 1");

  setTimeout(() => {
    console.log("Macrotask inside Microtask");
  }, 5000);
});


console.log("End");
