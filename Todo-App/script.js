const state = {
  todos: [
    { description: "Learn HTML", done: true },
    { description: "Learn CSS", done: false },
  ],
};

function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  state.todos.forEach((todo) => {
    const todoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (event) => {
      const newToDoDoneState = event.target.checked;
      todo.done = newToDoDoneState;
    });

    todoLi.appendChild(checkbox);

    const todoText = document.createTextNode(todo.description);
    todoLi.appendChild(todoText);

    list.appendChild(todoLi);
  });
}

renderTodos();
