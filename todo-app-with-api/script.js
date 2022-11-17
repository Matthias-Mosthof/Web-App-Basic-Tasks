const btnAdd = document.querySelector("#btn-add");
const inpAdd = document.querySelector("#inp-add");

const rmvBtn = document.querySelector("#btn-remove");

const btnAll = document.querySelector("#all");
const btnOpen = document.querySelector("#open");
const btnDone = document.querySelector("#done");
const list = document.querySelector("#list");

const warnText = document.querySelector("#warning-doppelt-text");
const warnText2 = document.querySelector("#warning-short");

let todos = [];

function loadTodos() {
  fetch("http://localhost:4730/todos")
    .then((res) => res.json())
    .then((todosBackend) => {
      todos = todosBackend;
      renderTodos();
    });
}
loadTodos();

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    let newLi = document.createElement("li");
    let checkbox = document.createElement("input");
    let todoText = document.createTextNode(todo.description);

    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", (event) => {
      todo.done = event.target.checked;
      let updatedTodo = todo;
      let id = todo.id;

      fetch("http://localhost:4730/todos/" + id, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updatedTodo),
      })
        .then((res) => res.json())
        .then((newTodoFromBackend) => {
          console.log(newTodoFromBackend);
        });
    });
    // Filterfunktionen
    btnDone.addEventListener("change", () => {
      // Filter Done ausgewählt -> Alle die nicht done sind werden ausgeblendet
      if (btnDone.checked === true) {
        if (todo.done != true) {
          newLi.style.display = "none";
        } else if (btnAll.checked === true || btnDone.checked === true) {
          newLi.style.display = "";
        }
      }
    });

    btnOpen.addEventListener("change", () => {
      // Filter Open ausgewählt -> Alle die nicht open sind werden ausgeblendet
      if (btnOpen.checked === true) {
        if (todo.done != false) {
          newLi.style.display = "none";
        } else if (btnAll.checked === true || btnOpen.checked === true) {
          newLi.style.display = "";
        }
      }
    });

    btnAll.addEventListener("change", () => {
      // Filter All ausgewählt -> alles wird eingeblendet
      newLi.style.display = "";
    });

    newLi.appendChild(checkbox);
    newLi.appendChild(todoText);

    list.append(newLi);
  });
  //console.log(todos);
}

renderTodos();

btnAdd.addEventListener("click", () => {
  let typedText = inpAdd.value;
  const typedTextLength = typedText.length;
  // Wenn das Wort schon existiert, speicher es nicht
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].description === typedText) {
      inpAdd.style.border = "0.2em solid red";
      warnText.style.display = "block";
      return;
    }
  }
  if (typedTextLength > 5) {
    inpAdd.style.border = "0.1em solid #f5ab00";
    warnText.style.display = "none";
    warnText2.style.display = "none";
    let newTodo = {
      description: inpAdd.value,
      done: false,
    };
    console.log(newTodo);
    fetch("http://localhost:4730/todos", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((newTodoFromBackend) => {
        todos.push(newTodoFromBackend);
        renderTodos();
      });
  } else {
    warnText2.style.display = "block";
  }

  inpAdd.value = "";
  // Im Objekt gespeicherte Werte über die Funktion ans HTML übergeben
  renderTodos();
});

rmvBtn.addEventListener("click", (ev) => {
  let getID = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === true) {
      getID = todos[i].id;
      fetch("http://localhost:4730/todos/" + getID, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {});
    }
  }
  loadTodos();
});

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
