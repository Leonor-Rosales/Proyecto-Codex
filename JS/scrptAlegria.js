document.addEventListener("DOMContentLoaded", () => {
    // Inicializamos una lista de ejemplo
    let tasks = [
        { name: "Tarea 1", description: "Descripción de la tarea 1", status: "normal" },
        { name: "Tarea 2", description: "Descripción de la tarea 2", status: "half-completed" },
        { name: "Tarea 3", description: "Descripción de la tarea 3", status: "completed" }
    ];

    // Función para mostrar las tareas
    function displayTasks() {
        const taskList = document.getElementById("task-list");
        const completedList = document.getElementById("completed-list");
        taskList.innerHTML = ''; // Limpiar lista de tareas pendientes
        completedList.innerHTML = ''; // Limpiar lista de tareas completadas

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.classList.add(task.status);

            const taskDetails = document.createElement("div");
            taskDetails.innerHTML = `<strong>${task.name}</strong><br>${task.description}`;

            // Botón de "Completar" y "Medio Completar" si la tarea no está completada
            if (task.status !== "completed") {
                const completeBtn = document.createElement("button");
                completeBtn.textContent = "Completar";
                completeBtn.classList.add("complete");
                completeBtn.onclick = () => markAsCompleted(index);

                const halfCompleteBtn = document.createElement("button");
                halfCompleteBtn.textContent = "En Progreso";
                halfCompleteBtn.classList.add("half-completed");
                halfCompleteBtn.onclick = () => markAsHalfCompleted(index);

                li.appendChild(taskDetails);
                li.appendChild(completeBtn);
                li.appendChild(halfCompleteBtn);

                taskList.appendChild(li); // Agregar a lista de tareas pendientes
            } else {
                li.appendChild(taskDetails); // Agregar solo los detalles para tareas completadas
                completedList.appendChild(li); // Agregar a lista de tareas completadas
            }
        });
    }

    // Marcar tarea como completada y actualizar listas
    function markAsCompleted(index) {
        tasks[index].status = "completed";
        displayTasks();
    }

    // Marcar tarea como medio completada y actualizar listas
    function markAsHalfCompleted(index) {
        tasks[index].status = "half-completed";
        displayTasks();
    }

    // Mostrar las tareas al cargar la página
    displayTasks();
});
