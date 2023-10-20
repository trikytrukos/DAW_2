let Peliculas = [
    {
        titulo: "El Padrino",
        ano: "1972",
        actoresPrincipales: ["Marlom Brando", "Al Pacino", "James Caan"]
    },
    {
        titulo: "Titanic",
        ano: "1997",
        actoresPrincipales: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
    },
    {
        titulo: "Matrix",
        ano: "1999",
        actoresPrincipales: ["Keanu Reeves", "Laurence Fishburne", "CarAnne Moss"]
    }
]

function listarPeliculas() {
    let listadoPeliculas=document.getElementById("Peliculas");
    for (let i = 0; i < Peliculas.length; i++) {
        let pelicula = Peliculas[i];
        listadoPeliculas.innerHTML += ` <div>
        <h2>${pelicula.titulo}</h2>
        <p>Año: ${pelicula.ano}</p>
        <p>Actores Principales: ${pelicula.actoresPrincipales.join(", ")}</p>
        </div> `;
    }
}
window.onload = function() {
    listarPeliculas();
}