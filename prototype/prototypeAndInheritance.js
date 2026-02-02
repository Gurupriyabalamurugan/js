const obj = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(obj.c);

// //prototype

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(this.name + " makes a sound");
// };

// function Dog(name) {
//   Animal.call(this, name); // inherit property
// }

// // link prototypes
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log(this.name + " barks");
// };

// const d = new Dog("Buddy");
// d.speak(); // inherited
// d.bark();  // own method

//class based
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " barks");
  }
}

const d = new Dog("Buddy");
d.speak(); 
d.bark();  

//mixin
const Fly = {
  fly() { 
    console.log("Flying"); 
}
};

class Bird {}
Object.assign(Bird.prototype, Fly);

const b = new Bird();
b.fly();
