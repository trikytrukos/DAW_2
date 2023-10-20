const biblioteca = [];

function agregarLibro() {
    const titulo = prompt("Ingrese el título del libro:");
    const autor = prompt("Ingrese el autor del libro:");
    const anio = prompt("Ingrese el año del libro:");
    const genero = prompt("Ingrese el género del libro:");

    const libro = {
        titulo,
        autor,
        anio,
        genero
    };

    biblioteca.push(libro);
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    const bibliotecaDiv = document.getElementById("biblioteca");
    bibliotecaDiv.innerHTML = ""; // Limpiar la vista

    biblioteca.forEach(libro => {
        const libroHTML = `
            <div class="libro">
                <p>Título: ${libro.titulo}  Autor: ${libro.autor}  Año: ${libro.anio}  Género: ${libro.genero}</p>
            </div>
        `;
        bibliotecaDiv.innerHTML += libroHTML;
    });
}

function eliminarLibro() {
    const tituloEliminar = prompt("Ingrese el título del libro que desea eliminar:");
    const indiceEliminar = biblioteca.findIndex(libro => libro.titulo === tituloEliminar);

    if (indiceEliminar !== -1) {
        biblioteca.splice(indiceEliminar, 1);
        mostrarBiblioteca();
    } else {
        alert("El libro no se encontró en la biblioteca.");
    }
}
