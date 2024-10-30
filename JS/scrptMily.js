document.addEventListener("DOMContentLoaded", () => {
    // Inicializamos una lista de ejemplo
    let tasks = [
        { name: "Laboratorio 1", description: "Laboratorio de programación", status: "normal" },
        { name: "Laboratorio 2", description: "Laboratorio de cálculo I", status: "half-completed" },
        { name: "Laboratorio 3", description: "Laboratorio de física I", status: "completed" }
    ];

    // Función para mostrar las tareas
    function displayTasks() {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = ''; // Limpiar lista

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.classList.add(task.status);

            const taskDetails = document.createElement("div");
            taskDetails.innerHTML = `<strong>${task.name}</strong><br>${task.description}`;

            // Botón de "Completar"
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Completar";
            completeBtn.onclick = () => markAsCompleted(index);

            // Botón de "Medio Completar"
            const halfCompleteBtn = document.createElement("button");
            halfCompleteBtn.textContent = "En Progreso";
            halfCompleteBtn.onclick = () => markAsHalfCompleted(index);
            li.appendChild(taskDetails);
            li.appendChild(completeBtn);
            li.appendChild(halfCompleteBtn);

            taskList.appendChild(li);
        });
    }

    // Marcar tarea como completada
    function markAsCompleted(index) {
        tasks[index].status = "completed";
        displayTasks();
    }

    // Marcar tarea como medio completada
    function markAsHalfCompleted(index) {
        tasks[index].status = "half-completed";
        displayTasks();
    }

    // Mostrar las tareas al cargar la página
    displayTasks();
});
