// let count = 1;

// setInterval(() => {
//   console.log("Count:", count);
//   count++;
// }, 1000);

let count = 1;

const id = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(id);
    console.log("Stopped");
  }
}, 1000);
//non blocking due to queue
