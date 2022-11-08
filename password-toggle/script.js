const inp = document.querySelector("#text");
const btnshow = document.querySelector("#show");
const btnhide = document.querySelector("#hide");
btnhide.setAttribute("hidden", "");

function toggle() {
  if (inp.type === "password") {
    inp.type = "text";
    btnshow.setAttribute("hidden", "");
    btnhide.removeAttribute("hidden");
  } else if (inp.type === "text") {
    inp.type = "password";
    btnhide.setAttribute("hidden", "");
    btnshow.removeAttribute("hidden");
  }
}

btnshow.addEventListener("click", toggle);
btnhide.addEventListener("click", toggle);
