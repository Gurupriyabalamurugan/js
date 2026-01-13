//undefined
let a1;//let n var but not const
console.log(a1)//variable declared without value

//null
var user=null;//var,const,let 
console.log(user);//intentionally set to null

//NaN
var my=0/0;         
console.log(my);
console.log(Number("abc"));
console.log(Math.sqrt(-1));

//nan is not the equal of itself
undefined==null      
undefined===null    

NaN==NaN//fasle

Number.isNaN(NaN); // true
