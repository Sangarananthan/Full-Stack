const name = document.querySelector(".x1iyjqo2");
const arr = [];
setInterval(() => {
  name.innerText = arr[Math.floor(Math.random() * arr.length)];
}, 1000);
