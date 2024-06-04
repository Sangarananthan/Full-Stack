// ARRAY
const arr = [1, 2, 3, 4];
// INSERT AT END
arr.push(9);
// REMOVE AT END
arr.pop();
// INSERT AT BEGINING
arr.unshift(5);
// REMOVE AT BEGINING
arr.shift();

console.log(arr);

// OBJECTS
let person = {
  name: "Dhanush",
  age: "40",
  Role: "Actor",
};
// Accessing items
// type1
console.log(person.name);
// type2
console.log(person["name"]);

// FUNCTIONS

// TYPE 1
function greet(name) {
  console.log(`Hey ${name}`);
}
// TYPE 2
const greet2 = function (name) {
  console.log(`Hey ${name}`);
};

// TYPE 3
const greet3 = (name) => console.log(`Hey ${name}`);

// CallBAck Function - Fn passed as an argument
function greet4(name, cb) {
  const data = `Hello ${name}`;
  cb(data);
}
function cb(data) {
  console.log(`${data} Welcome!..`);
}
greet4("Dhanush", cb);
