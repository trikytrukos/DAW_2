const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + ""));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/tasks", (req, res) => {
  fs.readFile(__dirname + "/data/tasks.json", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.post("/tasks", (req, res) => {
  const newTask = { id: Date.now(), description: req.body.description };

  fs.readFile(__dirname + "/data/tasks.json", (err, data) => {
    if (err) throw err;
    const tasks = JSON.parse(data).tasks;
    tasks.push(newTask);
    fs.writeFile(
      __dirname + "/data/tasks.json",
      JSON.stringify({ tasks }),
      (err) => {
        if (err) throw err;
        res.json(newTask);
      }
    );
  });
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  fs.readFile(__dirname + "/data/tasks.json", (err, data) => {
    if (err) throw err;
    let tasks = JSON.parse(data).tasks;

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

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
