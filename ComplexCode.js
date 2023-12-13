// File Name: ComplexCode.js

/*
    Description: This code is a complex implementation of a task management system.
    It includes features such as creating tasks, assigning tasks, setting due dates,
    marking tasks as completed, and generating reports.

    Disclaimer: This is a simplified example to illustrate a sophisticated code structure,
    and does not include all necessary error handling or validation checks.

    Author: [Your Name]
    Date: [Current Date]
*/

// Class representing a Task
class Task {
  constructor(title, description, dueDate, assignee) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.assignee = assignee;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

// Class representing the Task Management System
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTaskByTitle(title) {
    return this.tasks.find((task) => task.title === title);
  }

  getTasksByAssignee(assignee) {
    return this.tasks.filter((task) => task.assignee === assignee);
  }

  getOverdueTasks() {
    const today = new Date();
    return this.tasks.filter((task) => task.dueDate < today && !task.completed);
  }

  generateTaskReport() {
    let report = "Task Report:\n";
    this.tasks.forEach((task, index) => {
      report += `${index + 1}. ${task.title} - ${
        task.completed ? "Completed" : "Pending"
      }\n`;
    });
    return report;
  }
}

// Create an instance of Task Manager
const taskManager = new TaskManager();

// Create tasks
const task1 = new Task(
  "Implement UI",
  "Design and implement the user interface for the application.",
  new Date("2022-03-15"),
  "John Doe"
);

const task2 = new Task(
  "Implement Backend",
  "Develop the backend logic and APIs for the application.",
  new Date("2022-03-20"),
  "Jane Smith"
);

const task3 = new Task(
  "Write Documentation",
  "Create detailed documentation for the application.",
  new Date("2022-03-25"),
  "John Doe"
);

// Add tasks to the task manager
taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);

// Print generated task report
console.log(taskManager.generateTaskReport());

// Mark task as completed
task1.complete();

// Print updated task report
console.log(taskManager.generateTaskReport());

// Find task by title
const foundTask = taskManager.getTaskByTitle("Implement Backend");

console.log("Task Found:", foundTask);

// Find tasks assigned to John Doe
const johnDoeTasks = taskManager.getTasksByAssignee("John Doe");

console.log("John Doe's Tasks:", johnDoeTasks);