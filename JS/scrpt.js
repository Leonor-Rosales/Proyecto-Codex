document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const taskName = document.getElementById("task-name").value;
    const taskPriority = document.getElementById("task-priority").value;
    
    addTask(taskName, taskPriority);
});

function addTask(name, priority) {
    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");
    li.textContent = name;
    if (priority === "priority") {
        li.classList.add("priority");
    }

    // Botón de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () => taskList.removeChild(li);
    li.appendChild(deleteBtn);

    // Botón de modificar
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.onclick = () => modifyTask(li, name);
    li.appendChild(editBtn);

    taskList.appendChild(li);
}

function modifyTask(taskItem, oldName) {
    const newName = prompt("Modificar tarea", oldName);
    if (newName) {
        taskItem.firstChild.textContent = newName;
    }
}