// DATE
const date = new Date();
console.log(date.toDateString());

// SETINTERVAL
setInterval(() => {
  console.log("This Function Will Execute Every 2 seconds");
}, 2000);

// SETTIMEOUT
setTimeout(() => {
  console.log("This Function Will Executed after 2 seconds");
}, 2000);

//CLEAR INTERVAL
const interval = setInterval(() => {
  console.log("This Function is Being Executed between the intervals");
}, 2000);
setTimeout(() => {
  clearInterval(interval);
  console.log("STOPED");
}, 10000);

// ES6
const person = {
  name: "Dhanush",
  role: "actor",
  age: 40,
};

// Enhanced Literals
function user(name, role, age) {
  return {
    name,
    role,
    age,
  };
}

// Normal
function user(name, role, age) {
  return {
    name: name,
    role: role,
    age: age,
  };
}

const User1 = user("Dhanush", "Actor", 40);
console.log(User1);

// Spread Operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 5];
console.log(arr2);

// rest Operator
function nums(...a) {
  console.log(a);
}
nums(1, 2, 3, 4, 5);

// Destructuring
// array - Name Doesnt matter Order Does
const fruits = ["apple", "orange", "banana"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// object - Order Doesnt matter Name Does
const person1 = {
  name: "Jack",
  age: 20,
  place: "Texas",
};
const { name, age, place } = person1;
console.log(name, age, place);

// Terinary Operator
const pass = 7;
const Auth = pass === 8 ? "Crt" : "Wrng";
// Output - Wrng

// For in Loop - Index/Key
// Array
let arr3 = ["one", "two", "three", "four"];
for (let index in arr3) {
  console.log(arr3[index]);
}
// Object
let person2 = {
  name: "Oggy",
  age: 18,
  gender: "Male",
};
for (let key in person2) {
  console.log(key, person2[key]);
}

// For of Loop - every iterarable element
// Array
let arr4 = ["one", "two", "three", "four"];
for (let ele of arr4) {
  console.log(ele);
}
// Object
let person3 = {
  name: "Deedy",
  age: 18,
  gender: "Male",
};
for (let [key, value] of Object.entries(person3)) {
  console.log(key, value);
}

// forEach Loop - for every element
let array = [1, 2, 3, 4, 5];

// Using forEach to modify the original array
array.forEach((value, index) => {
  array[index] = value + 1;
});

console.log(array); // Output: [2, 3, 4, 5, 6]
// Example
const words = ["apple", "banana", "carrot", "dragon", "elephant", "flower"];
const capWords = words.forEach(
  (word, index) => (words[index] = word[0].toUpperCase() + word.substring(1))
);
console.log(words);

// Map
array = [1, 2, 3, 4, 5];

// Using map to create a new array with modified values
let newArray = array.map((value) => value + 1);

console.log(newArray);
// Output: [2, 3, 4, 5, 6]
console.log(array);
// Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// Filter
array = [1, 2, 3, 4, 5];

// Using filter to create a new array which Satisfies condition
newArray = array.filter((num) => num > 2);
console.log(newArray);

// Find
array = [1, 2, 3, 4, 5];

// Using find to element which Satisfies condition
newArray = array.find((num) => num > 2);
console.log(newArray);

// Some
array = [1, 2, 3, 4, 5];
let hasElementGreaterThanTwo = array.some((num) => num > 2);
console.log(hasElementGreaterThanTwo); // Output: true

// Every
array = [1, 2, 3, 4, 5];
let allElementsGreaterThanTwo = array.every((num) => num > 2);
console.log(allElementsGreaterThanTwo); // Output: false

// Reduce
array = [1, 2, 3, 4, 5];
let sum = array.reduce((p, c) => {
  console.log("previous", p);
  console.log("Current", c);
  return p + c;
}, 0);
console.log(sum);

// MAP - Similar tho obj
const map = new Map();

const keyOne = "Hello";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of Key One");
map.set(keyTwo, "Value of Key Two");
map.set(keyThree, "Value of Key Three");
console.log(map);

// SET - Uniques values
const mySet = new Set();
const arr = [1, 2, 3, 3, 4, 4, 5, 5, 5];
arr.forEach((x) => mySet.add(x));
console.log(mySet);
// OUTPUT- [1,2,3,4,5]

// Create a new Symbol
const uniqueID = Symbol("id");

person = {
  name: "John",
  age: 30,
  [uniqueID]: 12345,
};

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person[uniqueID]); // Output: 12345

// Symbols are unique
const anotherID = Symbol("id");
console.log(uniqueID === anotherID); // Output: false
