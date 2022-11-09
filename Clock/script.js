const minutesPointer = document.querySelector("#minutes");
const secondsPointer = document.querySelector("#seconds");
const hourPointer = document.querySelector("#hours");
const digital = document.querySelector("#digital");

// aktuelle Stunden / Minuten / Sekunden Werte beim Laden der Seite speichern
secondsOnLoad = Number(new Date().toString().slice(22, 24));

minutesOnLoad = Number(new Date().toString().slice(19, 21));

hoursOnLoad = Number(new Date().toString().slice(16, 18));

// Variable für rotateValueOnStart
let deg = 0;

// Funktion die die Gradzahl für den Sekundenzähler beim Laden ausrechnet

function rotateValueOnStartSeconds(secondsOnLoad) {
  let adder = 0;

  for (let i = 0; i < 60; i++) {
    // pro Schleifendurchlauf wird die zu Addierende Zahl um 5 erhöht,
    // da das der Pattern ist um die Gradzahl zu errechnen
    adder += 5;
    // wenn beim durchlauf der aktuelle Sekundenwert erreich wird, wird diese addiert mit dem adder.
    // Das ist dann die Gradzahl bei dem der Zeiger beim Laden gesetzt werden muss
    if (secondsOnLoad === i) {
      deg = secondsOnLoad + adder;
      return deg;
    }
  }
}

// Funktion die den Zeiger pro Intervall bewegt.

let degRotateInterval = 0;

function rotateSecondsPointer() {
  // Pro Sekunde muss der Zeiger um 6 Grad bewegt werden (360/60)
  // also: Von dort wo der Zeiger zuvor plaziert wurde werden nun immer 6 Grad dazugezählt
  let rotateValue =
    rotateValueOnStartSeconds(secondsOnLoad) + degRotateInterval + "deg";

  secondsPointer.style.rotate = rotateValue;
  degRotateInterval += 6;
}

function digitalWatch() {
  // aktuelle Zeit in HTML Element übertragen.
  digital.innerText = new Date().toString().slice(16, 24);
}

setInterval(digitalWatch, 1000);

setInterval(rotateSecondsPointer, 1000);
setInterval(rotateMinutesPointer, 1000);
setInterval(rotateHoursPointer, 1000);

function rotateValueOnStartMinutes(minutesOnLoad) {
  let adder = 0;

  for (let i = 0; i < 60; i++) {
    // pro Schleifendurchlauf wird die zu Addierende Zahl um 5 erhöht,
    // da das der Pattern ist um die Gradzahl zu errechnen
    adder += 5;
    // wenn beim Durchlauf der aktuelle Minutenwert erreich wird, wird diese addiert mit dem adder.
    // Das ist dann die Gradzahl bei dem der Zeiger beim Laden gesetzt werden muss
    if (minutesOnLoad === i) {
      deg = minutesOnLoad + adder;
      return deg;
    }
  }
}

function rotateMinutesPointer() {
  // Pro Minute muss der Zeiger um 6 Grad bewegt werden (360/60)
  // also: Von dort wo der Zeiger zuvor plaziert wurde werden nun immer 6 Grad dazugezählt

  minutesPointer.style.rotate =
    rotateValueOnStartMinutes(minutesOnLoad) + "deg";

  if (Number(new Date().toString().slice(22, 24)) == 00) {
    minutesPointer.style.rotate =
      rotateValueOnStartMinutes(minutesOnLoad) + degRotateInterval + "deg";
    degRotateInterval += 6;
  }
}

function rotateValueOnStartHours(hoursOnLoad) {
  let adder = 0;

  for (let i = 1; i < 24; i++) {
    // pro Schleifendurchlauf wird die zu Addierende Zahl um 14 erhöht,
    // da das der Pattern ist um die Gradzahl zu errechnen
    adder += 14;
    // wenn beim durchlauf der aktuelle Sekundenwert erreich wird, wird diese addiert mit dem adder.
    // Das ist dann die Gradzahl bei dem der Zeiger beim Laden gesetzt werden muss
    if (hoursOnLoad === i) {
      deg = hoursOnLoad + adder;
      return deg;
    }
  }
}

function rotateHoursPointer() {
  // Pro Stunde muss der Zeiger um 15 Grad bewegt werden (360/24)
  // also: Von dort wo der Zeiger zuvor plaziert wurde werden nun immer 15 Grad dazugezählt
  hourPointer.style.rotate = rotateValueOnStartHours(hoursOnLoad) + "deg";
  if (Number(new Date().toString().slice(19, 21)) === 00) {
    hourPointer.style.rotate =
      rotateValueOnStartHours(hoursOnLoad) + degRotateInterval + "deg";
    // 15 Grad pro Stunde (360/24)
    degRotateInterval += 15;
  }
}