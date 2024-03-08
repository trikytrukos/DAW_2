const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const path = require("path");
const PORT = 8080;

app.use(express.static(path.join(__dirname, "public"))); // Esto permite servir los archivos estáticos
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); //Se envía el archivo index.html
});

app.get("/tasks", (req, res) => {
  fs.readFile(path.join(__dirname, "data", "tasks.json"), (err, data) => {
    if (err) {
      res.status(500).send("Error al leer el archivo de tareas");
      return;
    }

    res.json(JSON.parse(data));
  });
});

//middleware para guardar las tareas en el archivo tasks.json
app.post("/tasks", (req, res) => {
  //Se guardan los valores de la tarea en un objeto para luego guardarlo en el archivo tasks.json
  const newTask = {
    id: Date.now(),
    description: req.body.description,
    columnId: req.body.columnId,
  };

  // Se lee el archivo tasks.json y se guardan las tareas en un array para poder seguir añadiendo tareas segun sea necesario
  fs.readFile(path.join(__dirname, "data", "tasks.json"), (err, data) => {
    if (err) throw err;
    const tasks = JSON.parse(data).tasks;
    tasks.push(newTask);

    // Se guarda el array de tareas en el archivo tasks.json
    fs.writeFile(
      path.join(__dirname, "data", "tasks.json"),
      JSON.stringify({ tasks }),
      (err) => {
        if (err) {
          res.status(500).send("Error al guardar la tarea");
        } else {
          res.status(200).json(newTask); // Envía la tarea recién creada como respuesta
        }
      }
    );
  });
});

// middleware para editar las tareas
app.put("/tasks/:id", (req, res) => {
  // se obtiene la id de la tarea a editar
  const taskId = Number(req.params.id);
  const updatedTask = req.body;

  // se lee el archivo tasks.json
  fs.readFile(path.join(__dirname, "data", "tasks.json"), (err, data) => {
    if (err) throw err;
    let tasks = JSON.parse(data).tasks;

    // se busca la tarea a editar para actualizarla
    tasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );

    // se guarda el array de tareas y se escibe en el archivo tasks.json
    fs.writeFile(
      path.join(__dirname, "data", "tasks.json"),
      JSON.stringify({ tasks }),
      (err) => {
        if (err) {
          res.status(500).send("Error al actualizar la tarea");
        } else {
          res.status(200).json({ message: "Tarea actualizada", taskId });
        }
      }
    );
  });
});

// middleware para eliminar las tareas de una en una
app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  fs.readFile(path.join(__dirname, "data", "tasks.json"), (err, data) => {
    if (err) throw err;
    let tasks = JSON.parse(data).tasks;

    //se flitra el array de tareas por id y se introducen todas las tareas que tenga una id distinta a la que se quiere eliminar
    tasks = tasks.filter((task) => task.id !== taskId);

    fs.writeFile(
      __dirname + "/data/tasks.json",
      JSON.stringify({ tasks }),
      (err) => {
        if (err) throw err;
        res.json({ id: taskId });
      }
    );
  });
});

// middleware para eliminar todas las tareas de una columna
app.delete("/columns/:columnId/tasks", (req, res) => {
  const columnId = req.params.columnId;

  fs.readFile(path.join(__dirname, "data", "tasks.json"), (err, data) => {
    if (err) {
      res.status(500).send("Error al leer el archivo de tareas");
      return;
    }

    //se filtran las tareas por el column id en vez de por el id de la tarea y se guardan en el array todas las tareas que no tengan el column id que se quiere eliminar
    let tasks = JSON.parse(data).tasks;
    tasks = tasks.filter((task) => task.columnId !== columnId);

    fs.writeFile(
      path.join(__dirname, "data", "tasks.json"),
      JSON.stringify({ tasks }),
      (err) => {
        if (err) {
          res.status(500).send("Error al guardar las tareas actualizadas");
        } else {
          res.status(200).json({
            message: `Todas las tareas de la columna ${columnId} han sido eliminadas.`,
          });
        }
      }
    );
  });
});

// donde escucha el servidor
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
