// CONDITION

// IF | ELSE |IF ELSE
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else if (age < 5) {
  console.log("Child");
} else {
  console.log("Boy");
}

// SWICTH CASE
let state = 1;
switch (state) {
  case 1:
    console.log("On");
    break;
  case 0:
    console.log("Off");
    break;
}

//LOOPS

// FOR LOOP
for (let i = 0; i <= 10; i++) {
  console.log(i);
} //0-10

// WHILE LOOP
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
} //0-10

// DO WHILE LOOP
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10); //0-10

// LOGICAL OPERATOR
const a = true;
const b = false;
// AND
console.log(a && b); //false
// OR
console.log(a || b); //true
// NOT
console.log(!a); //false
