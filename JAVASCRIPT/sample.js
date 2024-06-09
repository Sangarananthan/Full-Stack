const name = document.querySelector(".x1iyjqo2");
const arr = [
  "an alagan",
  "pengal ethaiya thirudan",
  "handsome guy",
  "playboy",
  "Nithishkumar",
  "choco boy",
];
setInterval(() => {
  name.innerText = arr[Math.floor(Math.random() * arr.length)];
}, 1000);
