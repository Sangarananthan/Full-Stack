const result = document.querySelector(".results");

async function fetchJson() {
  try {
    const res = await fetch("user.json");
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    result.textContent = data.address.city;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchJson();
