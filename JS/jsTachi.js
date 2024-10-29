document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
console.log("formulario enviado");
    const taskName = document.getElementById("task-name").value;
    const taskDesc = document.getElementById("task-desc").value;  // Obtener la descripción
    const taskPriority = document.getElementById("task-priority").value;

    // Verificar que los campos no estén vacíos
    if (taskName.trim() === "" || taskDesc.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Agregar la tarea
    AddTask(taskName, taskDesc, taskPriority);
    // Recargar la lista de tareas
    GetTasks();
    
    // Limpiar los campos del formulario después de agregar la tarea
    document.getElementById("task-name").value = "";
    document.getElementById("task-desc").value = "";
});

let tasks = [];

// Función para agregar una nueva tarea
function AddTask(name, description, priority) {
    const task = {
        name: name,
        description: description,
        priority: priority
    };
    tasks.push(task);
}

// Función para mostrar todas las tareas
function GetTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos elementos

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add(task.priority === "priority" ? "priority" : "");

        const taskDetails = document.createElement("div");
        taskDetails.innerHTML = `<strong>${task.name}</strong><br>${task.description}`;

        // Botón de eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.onclick = () => {
            RemoveTask(index);
        };

        // Botón de editar
        const editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.classList.add("edit");
        editBtn.onclick = () => {
            EditTask(index);
        };

        li.appendChild(taskDetails);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        taskList.appendChild(li);
    });
}

// Función para eliminar una tarea
function RemoveTask(index) {
    tasks.splice(index, 1);
    GetTasks();
}

// Función para editar una tarea
function EditTask(index) {
    const newName = prompt("Modificar nombre de la tarea", tasks[index].name);
    const newDesc = prompt("Modificar descripción de la tarea", tasks[index].description);
    
    if (newName && newDesc) {
        tasks[index].name = newName;
        tasks[index].description = newDesc;
        GetTasks();
    }
}

// Cargar la lista inicial al cargar la página
GetTasks();
