// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one = document.querySelector(".click");
function colorChange() {
  one.classList.toggle("red");
}
one.addEventListener("click", colorChange);

let two = document.querySelector(".contextmenu");
two.addEventListener("contextmenu", () => two.classList.toggle("blue"));

let three = document.querySelector(".dblclick");
three.addEventListener("dblclick", () => {
  three.style.backgroundColor = "orange";
});

let four = document.querySelector(".mousedown");
four.addEventListener("mousedown", () => four.classList.toggle("aqua"));

let five = document.querySelector(".mouseenter");
five.addEventListener("mouseenter", () => five.classList.toggle("green"));

let six = document.querySelector(".mouseleave");
six.addEventListener("mouseleave", () => {
  six.classList.toggle("crimson");
});

let seven = document.querySelector(".mousemove");
seven.addEventListener("mousemove", () => seven.classList.toggle("blue"));

let eight = document.querySelector(".mouseout");
eight.addEventListener("mouseout", () => eight.classList.toggle("blue"));

let nine = document.querySelector(".mouseover");
nine.addEventListener("mouseover", () => nine.classList.toggle("blue"));

let ten = document.querySelector(".mouseup");
ten.addEventListener("mouseup", () => ten.classList.toggle("blue"));
