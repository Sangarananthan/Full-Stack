const result = document.querySelector(".results");

// Promise
fetch("hello.txt")
  .then((res) => {
    if (!res.ok) throw new Error("File Not Found");
    return res.text();
  })
  .then((data) => {
    result.innerHTML = `<h1>${data}</h1>`;
  })
  .catch((error) => console.log(error));

//await async
async function fetchData() {
  try {
    const res = await fetch("hello.txt");
    if (!res.ok) {
      throw new Error("File Not Found");
    }
    const data = await res.text();
    const h2 = document.createElement("h2");
    h2.innerText = data;
    h2.style.color = "white";
    h2.style.backgroundColor = "teal";
    h2.style.padding = "10px";
    result.appendChild(h2);
  } catch (error) {}
}

fetchData();
