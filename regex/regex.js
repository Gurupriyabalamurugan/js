let a= /hello/.test("hello world");//as string literal 
console.log(a)

let b="hello world".replace("world", "JS");
console.log(b)
console.log("text here".replace(/\s/g,""));// \s->whitespace


const r = /(\d{2})-(\d{2})/; //d is digit {2}->2 times
console.log("12-34".match(r));

//^ start $ end

let superStr = "javascript is awesome";
let sub = "java";
let re=new RegExp(sub).test(superStr)
console.log(re)

//startswith
let starts=new RegExp("^" + sub).test(superStr);
console.log(starts)

//endswith
let ends=new RegExp(sub + "$").test(superStr);
console.log(ends)

//password regex
const passCondition=(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)
console.log("Password check")
console.log(passCondition.test("Abc123@900"))

//duplicates->more than 1\
console.log("Dupe")
console.log(/^(\w+)\s+\1$/i.test("foo foo")); 
console.log(/^(\w+)\s+\1$/i.test("bar foo foo"));


//negation
console.log("Blue is my favoutite".match(/[a-zA-Z]/g));
let str=`My favourite color is blue it is full of surprises may be \n
I need to look more of it Fuller colour of blue have plesant vibe\n
I dont think you are color blind\n
If you are colour blind what is ur fav color?\n
The HEX of blue color is #0000FF`;

//ocuurences {}
console.log(str.match(/colou?r{1,2}/gi));//.length to find no.of words

console.log(str.match(/colou?r\?/gi))//with question mark ->now as a string literal

console.log(str.match(/vibe$/gim))
