function x(){
    var a=22;
    function y(){
        console.log(a)//y is created with closure
    }
    a=800;
    return y;//a->800 since y holds refernce and not value of a 
}
let res=x();
console.log(res);
res();
