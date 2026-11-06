document.addEventListener("DOMContentLoaded", () => {
  
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#create-task-form");
  const taskInput = document.querySelector("#new-task-description");
  const priorityInput = document.querySelector("#priority");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    const taskDescription = taskInput.value.trim();
    const priority = priorityInput.value;

    if (taskDescription === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item", priority);

    // Create task text
    const taskText = document.createElement("span");
    taskText.textContent = taskDescription;

    // Mark task as completed
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function () {
      taskText.classList.toggle("completed");

      completeButton.textContent =
        taskText.classList.contains("completed")
          ? "Undo"
          : "Complete";
    });

    // Edit task
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function () {
      const updatedTask = prompt("Edit your task:", taskText.textContent);

      if (updatedTask !== null && updatedTask.trim() !== "") {
        taskText.textContent = updatedTask.trim();
      }
    });

    // Delete task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });

    // Add elements to the list item
    taskItem.appendChild(taskText);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    // Display the task in the DOM
    taskList.appendChild(taskItem);

    // Clear the input after submitting
    taskInput.value = "";
    taskInput.focus();
  });
});

});
