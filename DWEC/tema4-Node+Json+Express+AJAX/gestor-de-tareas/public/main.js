document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("#add-task");
  const taskInput = document.querySelector("#task-input");
  const taskList = document.querySelector(".task-list");
  loadTasks();
  // Event listener para mostrar el modal
  document.querySelectorAll(".add-task-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const columnId = this.getAttribute("data-column"); // Obtener el data-column del botón para identificar la columna  en la que se crea la tarea
      document
        .getElementById("task-modal")
        .setAttribute("data-column", columnId);
      document.getElementById("task-modal").style.display = "block";
    });
  });

  // Event listener para enviar la tarea al hacer clic en "Guardar"
  document
    .getElementById("save-task")
    .addEventListener("click", function (event) {
      sendTask();
    });

  // Event listener para enviar la tarea al presionar "Enter"
  var modal = document.getElementById("task-modal");
  modal.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendTask();
    }
  });

  document
    .getElementById("save-task")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        sendTask();
      }
    });

  // Event listener para mostrar el modal
  document.querySelectorAll(".add-task-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const columnId = this.getAttribute("data-column");
      document
        .getElementById("task-modal")
        .setAttribute("data-column", columnId);
      document.getElementById("task-modal").style.display = "block";
      document.getElementById("task-input-modal").focus();
    });
  });

  // Funcion que maneja la carga de las tareas
  function loadTasks() {
    fetch("/tasks")
      .then((response) => response.json())
      .then((data) => {
        data.tasks.forEach((task) => {
          addTaskToDOM(task);
        });
      })
      .catch((error) => console.error("Error al cargar las tareas:", error));
  }

  // Función para añadir una tarea al DOM
  function addTaskToDOM(task) {
    const column = document
      .getElementById(task.columnId)
      .querySelector(".task-list");

    const taskElement = document.createElement("div");
    taskElement.className = "task-item";
    taskElement.id = `task-${task.id}`; // Se le asigna un id único a la tarea
    taskElement.draggable = true; // Se establece draggable en true para poder arrastrarla de una columna a otra
    taskElement.innerHTML = `
    <div class="task-content">
        <span id="task-desc-${task.id}" class="task-desc">${task.description}</span>
    </div>
    <div class="task-actions">
        <button id="edit-btn-${task.id}" class="edit-task-btn">Editar</button>
        <button id="delete-btn-${task.id}" class="delete-task-btn">Eliminar</button>
    </div>`;

    column.appendChild(taskElement); // Añade la tarea a la columna correspondiente
    document.getElementById("task-input-modal").value = "";
    taskElement.addEventListener("dragstart", handleDragStart);

    const editBtn = document.getElementById(`edit-btn-${task.id}`);
    editBtn.addEventListener("click", function () {
      editTask(task.id);
    });

    const deleteBtn = document.getElementById(`delete-btn-${task.id}`);
    deleteBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });
  }

  // Función para enviar la tarea al servidor
  function sendTask() {
    const taskDescription = document.getElementById("task-input-modal").value;
    const columnId = document
      .getElementById("task-modal")
      .getAttribute("data-column");

    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: taskDescription,
        columnId: columnId,
      }),
    })
      .then((response) => response.json())
      .then((task) => {
        addTaskToDOM(task);
        document.getElementById("task-input-modal").value = "";
        document.getElementById("task-modal").style.display = "none";
      })
      .catch((error) => console.error("Error:", error));
  }

  //funcion para editar la tarea
  window.editTask = function (taskId) {
    const taskDescElement = document.getElementById(`task-desc-${taskId}`);
    // se captura la descripción actual de la tarea que se encuentra en el DOM para mostrarla en el modal
    const currentDescription = taskDescElement
      ? taskDescElement.textContent
      : "";

    document.getElementById("edit-task-input").value = currentDescription;
    document.getElementById("edit-task-modal").style.display = "block";

    document.getElementById("save-edit-task").onclick = function () {
      saveTaskEdit(taskId);
    };
  };

  //funcion para guardar la tarea editada
  function saveTaskEdit(taskId) {
    const updatedDescription = document.getElementById("edit-task-input").value;

    // Envía los datos actualizados al servidor
    fetch(`/tasks/${taskId}`, {
      method: "PUT", // Método HTTP para actualizaciones
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: updatedDescription }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data) => {
        // Actualizar la vista con la nueva descripción
        const taskElement = document.querySelector(
          `#task-${taskId} .task-desc`
        );
        if (taskElement) {
          taskElement.textContent = updatedDescription;
        }

        // Se cierra el modal una vez se recibe la respuesta del servidor
        document.getElementById("edit-task-modal").style.display = "none";
      })
      .catch((error) => {
        console.error("Error al actualizar la tarea", error);
      });
  }

  //funciones para el manejo de drag and drop
  function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function handleDragOver(event) {
    event.preventDefault(); // Necesario para permitir el drop
  }
  function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const taskElement = document.getElementById(taskId);
    if (taskElement && event.target.classList.contains("task-list")) {
      event.target.appendChild(taskElement);
    }
  }

  // Se agregan los event listeners para el drag and drop
  document.querySelectorAll(".task-list").forEach((taskList) => {
    taskList.addEventListener("dragover", handleDragOver);
    taskList.addEventListener("drop", handleDrop);
  });

  // Event listener para eliminar todas las tareas de una columna
  document.querySelectorAll(".delete-all-tasks-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const columnId = this.getAttribute("data-column"); //se identifica la columna en la que se pulsa el boton para eliminar todas las tareas de esa columna
      deleteAllTasks(columnId);
    });
  });

  // Función para eliminar todas las tareas de una columna
  function deleteAllTasks(columnId) {
    const taskListContainer = document.querySelector(`#${columnId} .task-list`);

    if (taskListContainer) {
      while (taskListContainer.firstChild) {
        taskListContainer.removeChild(taskListContainer.firstChild);
      }

      // Enviar solicitud al backend para eliminar las tareas de esta columna
      fetch(`/columns/${columnId}/tasks`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    } else {
      console.error(
        `Contenedor .task-list no encontrado para el columnId: ${columnId}`
      );
    }
  }

  // Event listener para eliminar tareas una a una
  window.deleteTask = function (taskId) {
    fetch(`/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar la tarea");
        }
        return response.json();
      })
      .then(() => {
        const taskElement = document.getElementById(`task-${taskId}`);
        if (taskElement) {
          taskElement.parentNode.removeChild(taskElement);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
});
