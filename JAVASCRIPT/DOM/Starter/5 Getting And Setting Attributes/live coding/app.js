// href
const a = document.querySelector("a");
a.href = "http://www.youtube.com/";
console.log(a.href);
// value
const input = document.querySelector("input");
input.value = "Hello";
console.log(input.value);
// type
console.log(input.type);
input.type = "password";

// getAttribute(attrName)
input.getAttribute("type");
// setAttribute(attrName, value)
input.setAttribute("type", "password");
