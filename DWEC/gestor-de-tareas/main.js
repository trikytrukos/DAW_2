document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('#add-task');
    const taskInput = document.querySelector('#task-input');
    const taskList = document.querySelector('.task-container');
    
    addButton.addEventListener('click', function () {
        const taskDescription = taskInput.value.trim();
        if (taskDescription) {
            addTask(taskDescription);
            taskInput.value = '';
        }
    });
    
    function addTask(description) {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `description=${encodeURIComponent(description)}`
        })
            .then(response => response.json())
            .then(task => {
                const taskElement = document.createElement('div');
                taskElement.className = 'task-item';
                taskElement.innerHTML = `
        <span>${task.description}</span>
        <button onclick="deleteTask(${task.id})">Eliminar</button>
      `;
                taskList.appendChild(taskElement);
            })
            .catch(error => console.error('Error:', error));
    }
});