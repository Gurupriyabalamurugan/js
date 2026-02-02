function add(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, 1000);
}
add(2, 3, (err, result) => {
  console.log(result);
});

//promisify
const { promisify } = require("util");
const addAsync = promisify(add);


async function run() {
  let result = await addAsync(2,80);
  console.log(result);
}

run();
