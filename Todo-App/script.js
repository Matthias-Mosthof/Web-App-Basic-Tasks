const btnAdd = document.querySelector("#btn-add");
const inpAdd = document.querySelector("#inp-add");

const rmvBtn = document.querySelector("#btn-remove");

const btnAll = document.querySelector("#all");
const btnOpen = document.querySelector("#open");
const btnDone = document.querySelector("#done");

// Objekt das alle Todos enthält, alle neuen Todos werden dort reingeschrieben
const state = {
  todos: [
    { description: "Learn HTML", done: false, ID: "#" + 11245 },
    { description: "Learn CSS", done: false, ID: "#" + 21214 },
  ],
};

function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";
  // Iteriert durch das Array, jedes Todo wird als Objekt angelegt im Array
  state.todos.forEach((todo, index, arr) => {
    const todoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (event) => {
      // Checkbox wird geklickt -> Wert wird in das State Objekt übergeben
      const newToDoDoneState = event.target.checked;
      todo.done = newToDoDoneState;
      // Checkbox angehakt -> Text wird durchgestrichen
      if (newToDoDoneState === true) {
        todoLi.style.textDecoration = "line-through";
      } else todoLi.style.textDecoration = "none";
    });

    // Filterfunktionen
    btnDone.addEventListener("change", () => {
      // Filter Done ausgewählt -> Alle die nicht done sind werden ausgeblendet
      if (btnDone.checked === true) {
        if (todo.done != true) {
          todoLi.style.display = "none";
        } else if (btnAll.checked === true || btnDone.checked === true) {
          todoLi.style.display = "";
        }
      }
    });

    btnOpen.addEventListener("change", () => {
      // Filter Open ausgewählt -> Alle die nicht open sind werden ausgeblendet
      if (btnOpen.checked === true) {
        if (todo.done != false) {
          todoLi.style.display = "none";
        } else if (btnAll.checked === true || btnOpen.checked === true) {
          todoLi.style.display = "";
        }
      }
    });

    btnAll.addEventListener("change", () => {
      // Filter All ausgewählt -> alles wird eingeblendet
      todoLi.style.display = "";
    });

    // Checkbox wird an die erstelle Liste angehängt
    todoLi.appendChild(checkbox);

    // Text aus Objekt, property description, wird an die Liste angehängt
    const todoText = document.createTextNode(todo.description);
    todoLi.appendChild(todoText);
    // Zusammengefügter Listeneintrag wird an die liste im HTML übergeben
    list.appendChild(todoLi);
  });

  console.log(state.todos);
}

renderTodos();

// Funktion um ID Nummer zu generieren
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const warnText = document.querySelector("#warning-doppelt-text");
const warnText2 = document.querySelector("#warning-short");

// Funktion um über Add Button die eingegebenen Einträge im Objekt einzufügen
btnAdd.addEventListener("click", () => {
  let typedText = inpAdd.value;
  const typedTextLength = typedText.length;
  // Wenn das Wort schon existiert, speicher es nicht
  for (let i = 0; i < state.todos.length; i++) {
    if (state.todos[i].description === typedText) {
      inpAdd.style.border = "0.2em solid red";
      warnText.style.display = "block";
      return;
    }
  }
  if (typedTextLength > 5) {
    inpAdd.style.border = "0.1em solid #f5ab00";
    warnText.style.display = "none";
    warnText2.style.display = "none";
    let todoID = getRandomInt(100000);
    state.todos.push({
      description: inpAdd.value,
      done: false,
      ID: "#" + todoID,
    });
  } else {
    warnText2.style.display = "block";
  }
  inpAdd.value = "";
  // Im Objekt gespeicherte Werte über die Funktion ans HTML übergeben
  renderTodos();
});

// Funktion um Einträge die Done sind zu löschen
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
