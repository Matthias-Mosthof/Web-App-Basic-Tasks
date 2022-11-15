const redSlider = document.querySelector("#r");
const greenSlider = document.querySelector("#g");
const blueSlider = document.querySelector("#b");
const colorValue = document.querySelector("#color-value");
const bg = document.querySelector("#bg");
const header = document.querySelector("main");
const rndColorBtn = document.querySelector("#random-color");

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

rndColorBtn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      console.log("OK");
      return response.json();
    })
    .then((data) => {
      let dynamicRed = data.rgb.r;
      let dynamicGreen = data.rgb.g;
      let dynamicBlue = data.rgb.b;
      let hexText = data.color;
      bg.style.backgroundColor = `rgb(${dynamicRed}, ${dynamicBlue}, ${dynamicGreen}`;
      header.style.backgroundColor = `rgb(${dynamicRed}, ${dynamicBlue}, ${dynamicGreen}, 0.40`;
      redSlider.value = dynamicRed;
      greenSlider.value = dynamicGreen;
      blueSlider.value = dynamicBlue;
      colorValue.innerText = hexText;
    });
});
