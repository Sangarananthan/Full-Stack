// ----------- BAD WAY-----------

const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Cool");
};

// ----------- GREAT WAY-----------

function greetings() {
  console.log("Hello World");
}
const thirdBtn = document.querySelector(".best");
thirdBtn.addEventListener("click", greetings);

// ----------- Event (e) Object -----------

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  input.value = "";
});
