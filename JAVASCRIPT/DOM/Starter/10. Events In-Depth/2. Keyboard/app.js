// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  const ctrlClicked = e.ctrlKey;
  const vClicked = e.key === "v" || e.key === "V";
  const cClicked = e.key === "c" || e.key === "C";

  if (ctrlClicked) {
    if (vClicked) {
      const h1 = document.createElement("h1");
      h1.textContent = "Great Developers paste";
      document.body.appendChild(h1);
    }
    if (cClicked) {
      const h1 = document.createElement("h1");
      h1.textContent = "Good Developers copy";
      document.body.appendChild(h1);
    }
  }
});
