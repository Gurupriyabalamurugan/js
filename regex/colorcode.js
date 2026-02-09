const text="#2A2A2A"
const s="The code for the color is #2A2A2A"
const regex=/#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

const matching=text.match(regex);
const tst=regex.test(text);
const srh0=text.search(regex)
const srh1=s.search(regex);


console.log(matching);
console.log(tst);
console.log(srh0);
console.log(srh1)//including space btw the words

