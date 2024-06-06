// ------------------------------------
// createElement()

// appendChild()
// Example two
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
    ) */

// removeChild()
// remove()

// ------------------------------------

// const h1 = document.createElement("h1");
// h1.textContent = "Hello world";
// h1.classList.add("apple");
// h1.style.color = "teal";
// console.log(h1);
// const body = document.body;
// body.appendChild(h1);

// ------------------------------------

// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.textContent = "Apple";
// ul.appendChild(newLi);
// const firstLi = document.querySelector("li");
// ul.insertBefore(newLi, firstLi);

// ------------------------------------

// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "Hi There";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);

// ------------------------------------

// let section = document.querySelector("section");
// const i = document.createElement("i");
// i.innerText = " I'm Italics";
// i.style.color = "orange";

// const h4 = document.createElement("h4");
// h4.innerText = "Sangar";
// h4.style.color = "red";

// section.append(i);
// section.prepend(h4);

// ------------------------------------

// const newList = document.querySelector(".new-list");
// const fourth = document.querySelector(".fourth");
// newList.removeChild(fourth);
// newList.remove();

// ------------------------------------
