const redSlider = document.querySelector("#r");
const greenSlider = document.querySelector("#g");
const blueSlider = document.querySelector("#b");
const colorValue = document.querySelector("#color-value");
const bg = document.querySelector("#bg");
const header = document.querySelector("main");

let hex = "";

function slideIntoColors() {
  let red = redSlider.value;
  let blue = greenSlider.value;
  let green = blueSlider.value;
  bg.style.backgroundColor = `rgb(${red}, ${blue}, ${green}`;
  header.style.backgroundColor = `rgb(${red}, ${blue}, ${green}, 0.40`;

  let r = parseInt(red, 10).toString(16);
  r = r.length == 1 ? "0" + r : r;

  let g = parseInt(green, 10).toString(16);
  g = g.length == 1 ? "0" + g : g;

  let b = parseInt(blue, 10).toString(16);
  b = b.length == 1 ? "0" + b : b;

  hex = "#" + r + g + b;
  colorValue.innerText = hex;
}

redSlider.addEventListener("input", slideIntoColors);
greenSlider.addEventListener("input", slideIntoColors);
blueSlider.addEventListener("input", slideIntoColors);
