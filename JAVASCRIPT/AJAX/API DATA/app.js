const button = document.querySelector(".btn");
button.style.color = "red";

button.addEventListener("click", makeRequest);

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}
