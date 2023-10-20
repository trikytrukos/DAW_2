const estudiantes = [];

function Estudiante(nom, ed, materias) {
    const nombre = nom;
    const edad = ed;
    const asignaturas = materias.split(",");

    const estudiante = {
        nombre,
        edad,
        asignaturas
    }
    estudiantes.push(estudiante);
}

function aniadirEstudiante() {
    let nombre = prompt("introduce nombre del estudiante");
    let edad = prompt("introduce la edad del estudiante");
    let materias = prompt("introduce las materias del estudiante separadas por comas");

    Estudiante(nombre, edad, materias);
}

function mostrarEstudiante() {
    const estudiantesDiv = document.getElementById("listadoEstudiantes");
    estudiantesDiv.innerHTML = "";

    estudiantes.forEach(estudiante => {
        const estudianteHtml = `
            <div class="estudiante">
                <p>nombre: ${estudiante.nombre} edad:${estudiante.edad} materias: ${estudiante.asignaturas}</p>
            </div>
        `;
        estudiantesDiv.innerHTML += estudianteHtml;
    })
}

function aniadirMaterias(){
        let nombreEstudiante = prompt("Introduce el nombre del estudiante");
        var estudianteEncontrado = false;
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].nombre === nombreEstudiante) {
                estudianteEncontrado = true;
                let nbMateria = prompt("Introduce el nombre de la materia que quieras añadir: ");
                estudiantes[i].asignaturas.push(nbMateria);
                break;
            }
        }
        if (!estudianteEncontrado) {
            alert("Estudiante no encontrado");
        }
    }
