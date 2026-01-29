const promise=new Promise((resolve,reject)=>{
    resolve("hello")
});
promise
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    .finally(()=>console.log("hello at finally block"));


function checkage(age){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{if(age>18){
            resolve("eligible to vote")
        }
        else{
            reject("not eligible")
        }
    },5000)
  }) ;
}
console.log(checkage(21));
checkage(3)
    .then(res=>console.log(res))//return type 
    .catch(err => console.log(err));

let promise1 = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => {
        const success=Math.random()>0.05;
        console.log(success);
        if(success){
            resolve("Success")
        }
        else{
            reject(new Error ("Failure"))
        }
  },1000);
});    
promise1.then(val=>console.log(val)).catch(err=>console.log(err));



const pr=new Promise((resolve,reject)=>{
    reject(new Error ("res place"))
});

pr
    .then(val=>{
    console.log(val)
})
    .catch(err=>{console.log(err.message)})
    .finally(()=>{console.log("finally block")})

console.log(pr)

function getuser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:1,name:"priya"})
        },1000);
    });
}

function getuser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:"priya"
            })
        })
    })
}
function getorder(userid){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["order1","order2"])
        },1000)
    })
}
function getPayment(order) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({ order:order,amount:500});
    }, 1000);
  });
}

getuser()
    .then(user=>{
        console.log("User");
        return getorder(user.id)
    })
    .then(order=>{
        console.log("Orders");
        return getPayment(order[1])
    })
    .then(payment => {
    console.log("Payment:", payment);
  })
  .catch(err => {
    console.log("Error:", err);
  });


fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => {
    if (!response.ok) return Promise.reject("Server Error!"); 
    return response.json();
  })
  .then(data => {
    if (data.length === 0) return Promise.resolve("Empty List");
    console.log("Success! We got items.");
    return data;
  })
  .catch(err => {
    console.log("Something went wrong:", err);
  });


const email1 = Promise.resolve("Email 1 sent");

const email2 = Promise.reject("Email 2 failed: Invalid Address");
const email3 = Promise.resolve("Email 3 sent");

Promise.allSettled([email1, email2, email3])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Task ${index + 1}: ✅ ${result.value}`);
      } else {
        console.log(`Task ${index + 1}: ❌ ${result.reason}`);
      }
    });
  })
  .catch((err)=>{
        console.log(err)
  });

  //for race
  function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Email sent successfully");
    }, 4000); // Takes 4 seconds (too slow!)
  });
}

function emailTimeout(ms) {
  return new Promise((_, reject) => {//_=>unused parameter of the promise
    setTimeout(() => {
      reject(new Error("Email sending timed out"));
    }, ms);
  });
}

Promise.race([
  sendEmail(),
  emailTimeout(3000) // 3 second timeout
])
  .then((result) => {
    console.log("✅", result);
  })
  .catch((error) => {
    console.log("❌", error.message);
  });
