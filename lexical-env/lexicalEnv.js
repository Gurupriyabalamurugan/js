function a(){
    function c(){
    console.log(b)
    }
    c();//a is the lexical parent of c
}
var b=10;
a();
