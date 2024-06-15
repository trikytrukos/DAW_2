const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const app = express();
const path = require("path");
const PORT = 8000;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html")); 
  });

  const getUsuarios = async () => {
    try {
      const data = await fs.readFile(path.join(__dirname, "data", "usuarios.json"), "utf8");
      return JSON.parse(data).usuarios;
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      throw error;
    }
  };

app.post("/login", async (req, res) =>{
    const { username, password } = req.body;
    
    try {
        const usuarios = await getUsuarios(); 
        console.log("Usuarios cargados correctamente");
        const usuario = usuarios.find(
          (u) => u.username === username && u.password === password
        );
        if (usuario) {
          const response = {
            success: true,
            username: usuario.username,
          };
          res.json(response);
        } else {
          console.log(`Login failed for ${username}`);
          res
            .status(401)
            .json({ success: false, message: "Credenciales incorrectas" });
        }
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
        res
          .status(500)
          .json({ success: false, message: "Error interno del servidor" });
      }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
  