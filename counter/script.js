const counter = document.querySelector("#counterr");
const bg = document.querySelector("#bg");
const btn = document.querySelector("button");

// Variable für die Breite deklarieren
let width = 0;

// Verhalten bei Klick definieren
// Farbenbreite wird pro Klick 10% höher

function toggle() {
  // Counter wird pro Klick nach oben gezählt
  counter.innerText++;
  // Variablenverhalten definieren, pro Klick wird der Wert um 10 erhöht
  width += 10;
  // Variable mit der Breite pro Klick addieren
  bg.style.width = width + "%";

  // Verhalten wenn 100% der Breite erreicht sind
  if (counter.innerHTML >= 10 && bg.style.width > "100%") {
    bg.style.width = "0%";
    counter.innerHTML = "0";
    width = 0;
  }
}

// Funktion für den Reset Knopf der alles zurücksetzt
counter.addEventListener("click", toggle);

function reset() {
  width = 0;
  bg.style.width = "0%";
  counter.innerHTML = 0;
}

btn.addEventListener("click", reset);

document.addEventListener("keyup", function (event) {
  console.log(event);
});
