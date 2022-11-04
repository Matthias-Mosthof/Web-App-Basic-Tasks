const btn = document.querySelector("button");
const body = document.querySelector("body");

function toggle() {
  body.classList.toggle("background");
  btn.classList.toggle("background");

  btn.classList.toggle("btn2");
}

btn.addEventListener("click", toggle);
