const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
                    <input type="checkbox">
                    <span>${taskText}</span>
                    <button class="delete-button">Delete</button>
                `;
    todoList.appendChild(listItem);

    newTaskInput.value = "";
  }
}

todoList.addEventListener("click", (event) => {
  if (event.target.className === "delete-button") {
    event.target.parentElement.remove();
  }
});

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }