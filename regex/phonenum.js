const ph="+918778587885";

//const regex=/^[6-9]\d{9}$/g;
const regex=/^(\+91)?[6-9]\d{9}$/g;

const tt=regex.test(ph);
console.log(tt)
