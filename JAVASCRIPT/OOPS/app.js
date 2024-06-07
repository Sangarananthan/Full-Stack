console.log(window);

window.firstName = "Sangar";
this.lastname = "cool";

function fnName() {
  return this;
}
console.log(fnName());

const obj = {
  firstName: "sangar",
  lastname: "cool",
  fullname: function () {
    return this;
  },
};
console.log(obj.fullname());

console.clear();

function createPerson(fs, ls, pl) {
  return {
    fs,
    ls,
    pl,
    fullname: function () {
      console.log(this.fs, this.ls, this.pl);
    },
  };
}

const sangar = createPerson("sangar", "ananthan", "java");
console.log(sangar);
sangar.fullname();

function car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    return `Strating ${this.make}`;
  };
  this.stop = function () {
    return `Stoping ${this.make}`;
  };
}

const car1 = new car("toyota", "camry", "2022", "Silver");
console.log(car1);
console.clear();
//Object.create()

let person = {
  greet: function () {
    return `Hi Hello ${this.firstName} ${this.lastname}`;
  },
};

const person1 = Object.create(person);
person1.firstName = "dhanush";
person1.lastname = "Kasthuri raja";
console.log(person1.greet());

const person2 = Object.create(person, {
  firstName: { value: "maari" },
  lastname: { value: "Dhanush" },
});
console.log(person2);

// Prototype

const obj1 = {
  name: "cool",
};
console.log(obj.__proto__);

String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
};

console.log("Hi da macha ".hello());

// Prototype inheritence

function animal(name) {
  this.name = name;
}
animal.prototype.sound = function () {
  return "Animal Sound";
};

const animal1 = new animal("Dog");
console.log(animal1);

function dog(bread, name) {
  animal.call(this, name);
  this.bread = bread;
  this.name = name;
}

dog.prototype = Object.create(animal.prototype);
const dog1 = new dog("Dog", "Golden Retriver");
console.log(dog1.sound());

// Classes inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.printUserInfo = function () {
      return `${this.name} is ${this.age} years Old `;
    };
  }
  //   prototype member
  greet() {
    return `Vanakam Da mapla ${this.name}`;
  }
}
class Programmer extends Person {
  constructor(name, age, pl, job) {
    super(name, age);
    this.pl = pl;
    this.job = job;
  }
}

const person3 = new Person("Dhanush", "38");
console.log(person3.greet());

const person4 = new Programmer("Maari", "38", "java", "Developer");
console.log(person4.printUserInfo());

// Example
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `Hi there ${this.name}`;
  }
}

const sangarCool = new Hero("Sangar", "Pro");
console.log(sangarCool);

class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}
const rockingStart = new Mega("Dhanush", "god", "irreplaceable actor");
console.log(rockingStart.greet());
console.clear();
// Modifiers
