public class Task
{
    public string Name { get; set; }
    public string Description { get; set; }  // Nueva propiedad para la descripción
    public bool IsPriority { get; set; }
    
    public Task(string name, string description, bool isPriority)
    {
        Name = name;
        Description = description;
        IsPriority = isPriority;
    }
}

public class TaskManager
{
    private List<Task> tasks;

    public TaskManager()
    {
        tasks = new List<Task>();
    }

    // Método para agregar una nueva tarea
    public void AddTask(string name, string description, bool isPriority)
    {
        Task newTask = new Task(name, description, isPriority);
        tasks.Add(newTask);
    }

    // Método para eliminar una tarea
    public void RemoveTask(int index)
    {
        if (index >= 0 && index < tasks.Count)
        {
            tasks.RemoveAt(index);
        }
    }

    // Método para modificar una tarea
    public void EditTask(int index, string newName, string newDescription, bool newPriority)
    {
        if (index >= 0 && index < tasks.Count)
        {
            tasks[index].Name = newName;
            tasks[index].Description = newDescription;  // Modificar la descripción
            tasks[index].IsPriority = newPriority;
        }
    }

    // Método para obtener la lista de tareas
    public List<Task> GetTasks()
    {
        return tasks;
    }
}