const minutesPointer = document.querySelector("#minutes");
const secondsPointer = document.querySelector("#seconds");
const hourPointer = document.querySelector("#hours");
const digital = document.querySelector("#digital");
let deg = 0;

// aktuelle Sekunden Werte beim Laden der Seite speichern
secondsOnLoad = Number(new Date().toString().slice(22, 24));

// aktuelle Minuten speichern und Zeiger beim laden platzieren
minutesOnLoad = Number(new Date().toString().slice(19, 21));

function setMinutesPointer() {
  minutesPointer.style.rotate =
    rotateValueOnStartMinutes(minutesOnLoad) + "deg";
}

setMinutesPointer();

// aktuelle Stunde speichern und Zeiger beim laden platzieren
hoursOnLoad = Number(new Date().toString().slice(16, 18));

function setHoursPointer() {
  hourPointer.style.rotate = rotateValueOnStartHours(hoursOnLoad) + "deg";
}
setHoursPointer();

// Funktion die die Gradzahl für den Sekundenzähler beim Laden ausrechnet

function rotateValueOnStartSeconds(secondsOnLoad) {
  let adder = 0;

  for (let i = 1; i <= 60; i++) {
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

let degRotateInterval = 6;

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

  for (let i = 1; i <= 60; i++) {
    // pro Schleifendurchlauf wird die zu Addierende Zahl um 5 erhöht, weil:
    // 360/60 = 6 grad
    // 1 uhr 6 grad     +5
    // 2 uhr 12 grad		+10
    // 3 18 grad		    +15
    // 4 24 grad		    +20
    adder += 5;
    // wenn beim Durchlauf der aktuelle Minutenwert erreich wird, wird diese addiert mit dem adder.
    // Das ist dann die Gradzahl bei dem der Zeiger beim Laden gesetzt werden muss
    if (minutesOnLoad === i) {
      deg = minutesOnLoad + adder;
      return deg;
    }
  }
}

let degRotateIntervalMinutes = 6;
function rotateMinutesPointer() {
  // Pro Minute muss der Zeiger um 6 Grad bewegt werden (360/60)
  // also: Von dort wo der Zeiger zuvor plaziert wurde werden nun immer 6 Grad dazugezählt

  if (Number(new Date().toString().slice(22, 24)) == 0) {
    minutesPointer.style.rotate =
      rotateValueOnStartMinutes(minutesOnLoad) +
      degRotateIntervalMinutes +
      "deg";
    degRotateIntervalMinutes += 6;
  }
}

function rotateValueOnStartHours(hoursOnLoad) {
  let adder = 0;

  for (let i = 1; i <= 24; i++) {
    // pro Schleifendurchlauf wird die zu Addierende Zahl um 29 erhöht, weil:
    // 360/12 = 30 grad
    // 1 uhr 30 grad    +29
    // 2 uhr 60		      +58
    // 3 90 uhr		      +87
    // 4 120 uhr		    +116
    // usw.
    adder += 29;
    // wenn beim durchlauf der aktuelle Sekundenwert erreich wird, wird diese addiert mit dem adder.
    // Das ist dann die Gradzahl bei dem der Zeiger beim Laden gesetzt werden muss
    if (hoursOnLoad === i) {
      deg = hoursOnLoad + adder;
      return deg;
    }
  }
}

let degRotateIntervalHours = 30;

function rotateHoursPointer() {
  // Pro Stunde muss der Zeiger um 15 Grad bewegt werden (360/12)
  // also: Von dort wo der Zeiger zuvor plaziert wurde werden nun immer 15 Grad dazugezählt

  if (
    Number(new Date().toString().slice(19, 21)) == 0 &&
    Number(new Date().toString().slice(22, 24) == 0)
  ) {
    hourPointer.style.rotate =
      rotateValueOnStartHours(hoursOnLoad) + degRotateIntervalHours + "deg";
    degRotateIntervalHours += 30;
    // 15 Grad pro Stunde (360/24)
  }
}
