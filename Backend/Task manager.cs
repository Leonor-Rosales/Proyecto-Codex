using System;
using System.Collections.Generic;

public class TaskManager
{
    public List<Task> Tasks { get; private set; }

    public TaskManager()
    {
        Tasks = new List<Task>();
    }

    public void AddTask(string name, bool isPriority)
    {
        Tasks.Add(new Task { Name = name, IsPriority = isPriority });
    }

    public void RemoveTask(string name)
    {
        Tasks.RemoveAll(t => t.Name == name);
    }

    public void UpdateTask(string oldName, string newName)
    {
        var task = Tasks.Find(t => t.Name == oldName);
        if (task != null)
        {
            task.Name = newName;
        }
    }

    public List<Task> GetTasks()
    {
        return Tasks;
    }
}

public class Task
{
    public string Name { get; set; }
    public bool IsPriority { get; set; }
}