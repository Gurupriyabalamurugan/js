async function calculate() {
  throw "Error";   
}

calculate()
    .then(value => {
  console.log(value);
})
    .catch((err)=>{
        console.log(err)
    });

try{
    //calculate();//unhandled rejection if just called 
    await calculate();
}
catch(err){
    console.log(err)
}

//await helps in waiting for the promises to finish
try{
let x = await Promise.reject("err");
throw "errr";
console.log(x);
}
catch(e){
    console.log(e)
}

let y=await Promise.resolve("hello")
console.log(y)


function a1() {
  //return Promise.reject("FAILURE from a1");
  return Promise.resolve("resolved")
}

async function test() {
    try{
        let x1=await a1();
        console.log("Inner",x1)
        return x1;//
    }
    catch(err){
        console.log("inside",err)
        throw err;//pass the err out
    }
}
test()
    .then((val)=>{
        console.log("Outer val",val)
    })
    .catch((err)=>{
        console.log("outer catch",err)
    })
