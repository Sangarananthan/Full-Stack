const btns = document.querySelectorAll(".btn");
const body = document.body;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.value;
    changeBackgroud(color);
  });
  function changeBackgroud(color) {
    switch (color) {
      case "purple":
        body.style.backgroundColor = "purple";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "red":
        body.style.backgroundColor = "red";
        break;
      case "green":
        body.style.backgroundColor = "green";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "teal":
        body.style.backgroundColor = "teal";
        break;
    }
  }
});
