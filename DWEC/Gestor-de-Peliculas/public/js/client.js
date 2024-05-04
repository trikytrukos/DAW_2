document.addEventListener('DOMContentLoaded', () => {

    loadmovies();

    document.getElementById('add-movie').addEventListener('click', () =>{
        addNewMovie();
    });

    //*boton de logout
    document.getElementById('logout-button').addEventListener('click', () =>{

        localStorage.removeItem('userID');
        window.location.href = '/index.html';
    });
});


function loadmovies(){
    const userID = localStorage.getItem('userID');

    fetch('/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userID })
    })
    .then(response => response.json())
    .then(data => {
        
        data.forEach(movie => {
            addMoviestoDOM(movie);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function addMoviestoDOM(movies){
   const movieContainer = document.createElement("div");
    movieContainer.id = movies.title;
    movieContainer.classList.add("movie");
    movieContainer.innerHTML = `<span>${movies.title}</span> 
    <button id = 'delete-button-${movies.title}'>Eliminar</button> 
    <button id = 'update-button-${movies.title}'>Editar</button>`;

    document.getElementById(`${movies.category}-movies`).appendChild(movieContainer);

    const deleteButton = document.getElementById(`delete-button-${movies.title}`);
    deleteButton.addEventListener('click', () =>{

        deleteMovie(movies.title);

    });

    const updateButton = document.getElementById(`update-button-${movies.title}`);
    updateButton.addEventListener('click', () =>{

        updateMovie(movies.title);

    });
}



function addNewMovie(){
    const userID = localStorage.getItem('userID');
    const title = document.getElementById('title-input').value;
    const category = document.getElementById('category-selector').value;

    if (title !== ""){

        fetch('/addmovies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userID, title, category })
        })
        .then(response => response.json())
        .then(data => {
            
            if (data.success) {
                
                addMoviestoDOM(data);
            }
            else {
                
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }
}

function deleteMovie (title){

    const userID = localStorage.getItem('userID');

    fetch('/deletemovie', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userID, title })
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById(data.title).remove();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function updateMovie(title){

    const userID = localStorage.getItem('userID');
    const newTitle = prompt('Introduce el nuevo titulo');

    fetch('/updatemovie', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userID, title, newTitle })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById(title).remove();
        addMoviestoDOM(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}