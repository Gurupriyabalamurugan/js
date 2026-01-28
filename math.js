//before declaration
export function add(a,b){
    return a+b;
}
export const pi=3.14;

//export as
let total=20;
export{total as total_num};

//export after
function sub(a,b){
    return a-b;
}
export{sub};

//default export
export default function multiply(a, b) {
  return a * b;
}