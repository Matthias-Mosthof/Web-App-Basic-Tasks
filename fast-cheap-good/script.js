const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");

let lastCheckedItem;
let clickCounter = 0;

fast.addEventListener("change", checked);
cheap.addEventListener("change", checked);
good.addEventListener("change", checked);

function checked(event) {
  if (event.target.checked === true) {
    clickCounter++;
  } else {
    clickCounter--;
  }
  
  if (clickCounter === 3) {
    lastCheckedItem.checked = false;
    clickCounter--;
  }
  lastCheckedItem = event.target;
}
