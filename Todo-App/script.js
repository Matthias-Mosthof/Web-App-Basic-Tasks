const btnAdd = document.querySelector("#btn-add");
const inpAdd = document.querySelector("#inp-add");

const rmvBtn = document.querySelector("#btn-remove");

const btnAll = document.querySelector("#all");
const btnOpen = document.querySelector("#open");
const btnDone = document.querySelector("#done");

const state = {
  todos: [
    { description: "Learn HTML", done: true },
    { description: "Learn CSS", done: false },
  ],
};

function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";
  state.todos.forEach((todo, index, arr) => {
    const todoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (event) => {
      const newToDoDoneState = event.target.checked;
      todo.done = newToDoDoneState;
      if (newToDoDoneState === true) {
        todoLi.style.textDecoration = "line-through";
      } else todoLi.style.textDecoration = "none";
    });

    btnDone.addEventListener("change", (evnt) => {
      console.log(btnDone.checked);
      if (btnDone.checked === true) {
        if (todo.done != true) {
          todoLi.style.display = "none";
        } else if (btnAll.checked === true || btnDone.checked === true) {
          todoLi.style.display = "";
        }
      }
    });

    btnOpen.addEventListener("change", (eventt) => {
      if (btnOpen.checked === true) {
        if (todo.done != false) {
          todoLi.style.display = "none";
        } else if (btnAll.checked === true || btnOpen.checked === true) {
          todoLi.style.display = "";
        }
      }

      btnAll.addEventListener("change", () => {
        todoLi.style.display = "";
      });
    });

    todoLi.appendChild(checkbox);

    const todoText = document.createTextNode(todo.description);
    todoLi.appendChild(todoText);

    list.appendChild(todoLi);
  });
}

renderTodos();

btnAdd.addEventListener("click", (e) => {
  state.todos.push({ description: inpAdd.value, done: false });
  inpAdd.value = "";
  renderTodos();
});

rmvBtn.addEventListener("click", (ev) => {
  state.todos.forEach((todo, index, arr) => {
    if (todo.done === true) {
      arr.splice(index, 1);
      renderTodos();
    }
  });
});

let lastCheckedItem;
let clickCounter = 0;

// Funktion das nur eine Radiobox aktiv sein kann
function onlyOneSelect(event) {
  if (event.target.checked === true) {
    clickCounter++;
  } else {
    clickCounter--;
  }

  if (clickCounter === 2) {
    lastCheckedItem.checked = false;
    clickCounter--;
  }
  lastCheckedItem = event.target;
}
// Aufruf der Funktion
btnAll.addEventListener("change", onlyOneSelect);
btnDone.addEventListener("change", onlyOneSelect);
btnOpen.addEventListener("change", onlyOneSelect);
