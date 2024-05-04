const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs').promises;

const PORT = 3000;
const data_file = path.join(__dirname, 'data', 'data.json');


const InternalServerError = 500;


app.use(express.static(path.join(__dirname, 'public')));

//*se usa para poder leer el body de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
  *Si se sirve el index.html, no es necesario usar otro endpoint para servirlo, ya que express.static lo hace por nosotros
  
  app.get('/', (req, res) => {
    *si no se sirve el index.html, hay que usar sendFile
    res.sendFile(path.join(__dirname, 'public', 'html', 'movies.html'));
});
*/



app.post('/login', async (req, res) => {
  //*se guardan los datos que se pasan desde el cliente por el body
  const { username, password } = req.body;
  const usuariologin = { username, password };

  try {
     //*se obtienen los usuarios del archivo data.json
     const data = await fs.readFile(data_file, 'utf-8');

     const usuarios = JSON.parse(data);

    //*se comparan los datos del json con los que recibimos en el body para ver si coinciden y por lo tanto poder loguearse
    
    const usuario = usuarios.users.find((u) => u.name === usuariologin.username && u.password === usuariologin.password);
    
    //*si el usuario existe, se devuelve el id del usuario
    if (usuario) {
      res.json({
        success: true,
        userID: usuario.id
      });
    }else{
      res.status(InternalServerError).json({
        success: false, 
        message: 'Usuario o contraseña incorrectos'
      });
    }
  } catch (error) {
    console.error(`Error al leer el archivo : ${error}`);
  } 
});


app.post('/movies', async (req, res) => {
  try {
    //*se obtiene el id del usuario para poder buscarlo en el json
    const userID = req.body.userID;

    //*se lee el archivo data.json
    const data = await fs.readFile(data_file, 'utf-8');

    //*se parsea el json para poder acceder a los datos
    const movies = JSON.parse(data);

   
    //* Filtran los usuarios en el json con el id que guardamos previamente y se accede al array de peliculas de ese usuario
    const userMovies = movies.users.find((user) => user.id === userID).movies;

    //*se devuelven las peliculas del usuario
    res.json(userMovies);
  } catch (error) {
    console.error(`Error al leer el archivo : ${error}`);
  }
});

app.post('/addmovies', async (req, res) => {
  try {
    //*obtenemos la id del usuario para poder buscarlo en el json
    const userID = req.body.userID;

    //*guardamos la pelicula en un objeto para poder añadirla al json 
    const { title, category } = req.body;

    //!al crear este objeto que es el que se enviara como respuesta del servidor es importante tner cuidado con las claves que se asignan, ya que si no son como las que se esperan en el cliente(en nuestro caso en la funcion addMoviesToDOM) no se podra acceder a los datos de la respuesta del servidor y por tanto la nueva pelicula no se añadira al DOM
    const newMovie = { 
      
      title: title, 
      category: category 
    };

    //*leemos el json para poder buscar el usuario y añadirle la pelicula
    const data = await fs.readFile(data_file, 'utf-8');

    //*parseamos el json para poder acceder a los datos
    const movies = JSON.parse(data);

    //*buscamos el usuario por su id y obtenemos el indice usando findIndex
    const userIndex = movies.users.findIndex((user) => user.id === userID);
    
    //*para que no se pueda introducir la misma pelicula en varias columnas comprobamos si el titula de la pelicula ya existe en el array de peliculas del usuario
    const peliculaExiste = movies.users[userIndex].movies.find((movie) => movie.title === title) ? true : false;

    if (peliculaExiste) {
      res.status(InternalServerError).json({
        success: false,
        message: 'La película ya existe'
      });
      return;
    }else{

      //*ahora que tenemos el indice del usuario, podemos añadirle la pelicula
      movies.users[userIndex].movies.push(newMovie);

      //*escribimos el json con la nueva pelicula
      await fs.writeFile(data_file, JSON.stringify(movies, null, 2), 'utf-8');

      //*devolvemos la pelicula añadida
      res.json({success:  true, newMovie} );
    }
  } catch (error) {
    res.status(InternalServerError).send(`Error al leer el archivo : ${error}`);
  }
});


app.delete('/deletemovie', async (req, res) => {

  try {

    //*obtenemos la id del usuario para poder buscarlo en el json
    const userID = req.body.userID;

    //*obtenemos el titulo de la pelicula que queremos eliminar
    const title = req.body.title;

    //*leemos el json para poder buscar el usuario y eliminarle la pelicula
    const data = await fs.readFile(data_file, 'utf-8');

    //*parseamos el json para poder acceder a los datos
    const movies = JSON.parse(data);

    //*buscamos el usuario por su id y obtenemos el indice usando findIndex
    const userIndex = movies.users.findIndex((user) => user.id === userID);

    //*buscamos el indice de la pelicula que queremos eliminar
    const movieIndex = movies.users[userIndex].movies.findIndex((movie) => movie.title === title);

    //*eliminamos la pelicula del array de peliculas del usuario
    movies.users[userIndex].movies.splice(movieIndex, 1);

    //*escribimos el json con la pelicula eliminada
    await fs.writeFile(data_file, JSON.stringify(movies, null, 2), 'utf-8');

    //*devolvemos la pelicula eliminada
    res.json({ title });

  } catch (error) {
    res.status(InternalServerError).send(`Error al leer el archivo : ${error}`);
  }

});


app.put('/updatemovie', async (req, res) => {

  try {
    
    const userID = req.body.userID;
    const title = req.body.title;

    //*obtenemos el nuevo titulo de la pelicula
    const newTitle = req.body.newTitle;

    const data = await fs.readFile(data_file, 'utf-8');
    const movies = JSON.parse(data);

    const userIndex = movies.users.findIndex((user) => user.id === userID);

    //*buscamos el indice de la pelicula que queremos actualizar
    const movieIndex = movies.users[userIndex].movies.findIndex((movie) => movie.title === title);

    //*actualizamos el titulo de la pelicula
    movies.users[userIndex].movies[movieIndex].title = newTitle;
    
    const movieCategory =  movies.users[userIndex].movies[movieIndex].category;

    //*escribimos el json con la pelicula actualizada
    await fs.writeFile(data_file, JSON.stringify(movies, null, 2), 'utf-8');


    //*devolvemos la pelicula actualizada
    res.json({ 
      title: newTitle, 
      category: movieCategory
    });

  } catch (error) {
    res.status(InternalServerError).send(`Error al leer el archivo : ${error}`);
  }
});



app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);

