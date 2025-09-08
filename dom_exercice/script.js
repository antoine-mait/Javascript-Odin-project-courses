
const container = document.querySelector("#container");
const p = document.createElement("p");
p.textContent = "Hey i'm red!";
p.style.color = "red";
const h3 = document.createElement("h3");
h3.textContent = "I'm blue h3";
h3.style.color = "blue";
const div = document.createElement("div");
div.style.backgroundColor="pink"; 
div.style.border = "1px solid black"; 
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
const h1 = document.createElement("h3");
h1.textContent = "i'm in a div";
div.append(h1, p2);
container.append(p, h3, div);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
// but this mean will only have 1 onclick event 


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});