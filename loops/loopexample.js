let i1=1;
while(i1<=5) {
  console.log(i1);
  i1++;
}


let i2=0;
do{
  console.log(i2);
  i2++;
}while(i2<5);


for(let i=1;i<=10;i++) {
  if(i===5) {
    continue; // if break->it doesn't proceed with iteration n stopped at 5th iteration i.e 1,2,3,4
  }
  console.log(i);
}
