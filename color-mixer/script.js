const redSlider = document.querySelector("#r");
const greenSlider = document.querySelector("#g");
const blueSlider = document.querySelector("#b");
const colorValue = document.querySelector("#color-value");
const bg = document.querySelector("#bg");

let hex = "";

function slideIntoColors() {
  let red = redSlider.value;
  let blue = greenSlider.value;
  let green = blueSlider.value;
  bg.style.backgroundColor = `rgb(${red}, ${blue}, ${green}`;
}

redSlider.addEventListener("input", slideIntoColors);
greenSlider.addEventListener("input", slideIntoColors);
blueSlider.addEventListener("input", slideIntoColors);
