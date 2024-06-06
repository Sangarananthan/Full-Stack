const k = document.querySelector(".RNNXgb");
const button = document.createElement("button");
button.innerText = "download";
button.style.color = "white";
button.style.padding = "10px";
button.style.background = "gray";
button.style.border = "none";
button.style.border = "0px 20px 20px 0px";
k.appendChild(button);

button.addEventListener("click", (event) => {
  event.preventDefault();
  const images = document.querySelectorAll("img");
  images.forEach((image, index) => {
    setInterval(() => {
      const link = document.createElement("a");
      link.href = image.src;
      link.download = `${index}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log(link);
    }, 2000);
  });
});
