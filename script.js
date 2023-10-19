const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const darkModeToggle = document.getElementById("dark-mode-checkbox");

darkModeToggle.addEventListener("change", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
                    <input type="checkbox" class = "checkbox">
                    <span>${taskText}</span>
                    <button class="delete-button" id="del-btn">Delete</button>
                `;
    todoList.appendChild(listItem);

    newTaskInput.value = "";
  }
}

todoList.addEventListener("click", (event) => {
  if (event.target.className === "delete-button") {
    event.target.parentElement.remove();
  }else if(event.target.className === "checkbox") {
    const tasks = event.target.parentElement;
    tasks.classList.toggle("completed")
  }
});