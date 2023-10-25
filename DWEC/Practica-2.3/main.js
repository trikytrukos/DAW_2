function addTask() {
    const newTaskText = document.getElementById("new-task").value;
    if (newTaskText.trim() === "") {
        return;
    }

    const taskList = document.getElementById("task-list");
    const newTask = document.createElement("li");
    newTask.textContent = newTaskText;
    newTask.onclick = function() {
        toggleTask(this);
    };

    taskList.appendChild(newTask);
    document.getElementById("new-task").value = "";
}

function removeSelectedTasks() {
    const taskList = document.getElementById("task-list");
    const selectedTasks = taskList.querySelectorAll(".selected");
    selectedTasks.forEach((task) => {
        taskList.removeChild(task);
    });
}

function removeTask() {
    const selectedTasks = document.querySelectorAll(".selected");
    if (selectedTasks.length > 0) {
        removeSelectedTasks();
    }
}

function moveTaskUp() {
    const taskList = document.getElementById("task-list");
    const selectedTask = taskList.querySelector(".selected");
    if (selectedTask) {
        const previousTask = selectedTask.previousElementSibling;
        if (previousTask) {
            taskList.insertBefore(selectedTask, previousTask);
        }
    }
}

function toggleTask(task) {
    task.classList.toggle("selected");
}
