const laberintoMatriz = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let juegoGanado = false;

const laberinto = document.getElementById('laberinto');
const personaje = document.createElement('div');
personaje.classList.add('celda', 'personaje');

// Crear las celdas del laberinto
laberintoMatriz.forEach((fila, i) => {
    fila.forEach((celda, j) => {
        const div = document.createElement('div');
        div.classList.add('celda');
        if (celda === 1) {
            div.classList.add('pared');
        } else if (celda === 0) {
            div.classList.add('camino');
        } else if (celda === 2) {
            div.classList.add('entrada');
        } else if (celda === 3) {
            div.classList.add('salida');
        }
        laberinto.appendChild(div);
    });
});

// Buscar la posición de la entrada y colocar el personaje allí
let filaEntrada, columnaEntrada;
for (let i = 0; i < laberintoMatriz.length; i++) {
    for (let j = 0; j < laberintoMatriz[i].length; j++) {
        if (laberintoMatriz[i][j] === 2) {
            filaEntrada = i;
            columnaEntrada = j;
            break;
        }
    }
    if (filaEntrada !== undefined) break;
}

let indiceEntrada = filaEntrada * laberintoMatriz[0].length + columnaEntrada;
laberinto.children[indiceEntrada].appendChild(personaje);

document.addEventListener('keydown', moverPersonaje);

function moverPersonaje(event) {
    
    if (juegoGanado) {
        return;
    }
    
    let nuevaFila = filaEntrada;
    let nuevaColumna = columnaEntrada;
    
    switch (event.key) {
        case 'ArrowUp':
            nuevaFila--;
            break;
        case 'ArrowDown':
            nuevaFila++;
            break;
        case 'ArrowLeft':
            nuevaColumna--;
            break;
        case 'ArrowRight':
            nuevaColumna++;
            break;
        default:
            return;
    }
    
    // Verificar si la nueva posición es un camino, una pared o la salida
    if (laberintoMatriz[nuevaFila] && laberintoMatriz[nuevaFila][nuevaColumna] !== 1) {
        // Mover al personaje primero, incluso si es la salida
        moverPersonajeEnLaberinto(nuevaFila, nuevaColumna);
        
        if (laberintoMatriz[nuevaFila][nuevaColumna] === 3) {
            // Si el personaje llega a la salida, activar animación de victoria
            setTimeout(mostrarAnimacionVictoria, 100);
        }
    }
}

function moverPersonajeEnLaberinto(nuevaFila, nuevaColumna) {
    // Eliminar al personaje de la posición actual
    laberinto.children[filaEntrada * laberintoMatriz[0].length + columnaEntrada].removeChild(personaje);
    
    // Actualizar fila y columna de entrada
    filaEntrada = nuevaFila;
    columnaEntrada = nuevaColumna;
    
    // Agregar al personaje en la nueva posición
    laberinto.children[filaEntrada * laberintoMatriz[0].length + columnaEntrada].appendChild(personaje);
}

document.getElementById('modalVictoria').style.display = 'none';

function mostrarAnimacionVictoria() {
    juegoGanado = true;
    document.getElementById('modalVictoria').style.display = 'block';
    // Agregar clases de animación al personaje y al laberinto
    personaje.classList.add('animacion-victoria');
   
}

function cerrarModal() {
    document.getElementById('modalVictoria').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const btnEmpezar = document.getElementById('btnEmpezar');
    const laberinto = document.getElementById('laberinto');
    
    // Escuchar el clic en el botón de inicio
    btnEmpezar.addEventListener('click', function () {
        // Ocultar el botón de inicio
        btnEmpezar.style.display = 'none';
        
        // Mostrar la animación de carga (puedes agregar tu animación aquí)
        mostrarAnimacionDeCarga();
        
        // Simular una espera de 10 segundos (10000 ms)
        setTimeout(function () {
            // Ocultar la animación de carga (puedes ocultar tu animación aquí)
            ocultarAnimacionDeCarga();
            
            // Mostrar el tablero de laberinto
            laberinto.style.display = 'block';
            
            // Iniciar el juego
            // Aquí puedes agregar lógica adicional para comenzar el juego
        }, 10000); // Cambia el tiempo a 10000 ms (10 segundos)
    });
    
    // Función para mostrar la animación de carga (personalízala según tus necesidades)
    function mostrarAnimacionDeCarga() {
        // Agrega tu lógica para mostrar una animación de carga aquí
        // Por ejemplo, puedes mostrar un spinner o cualquier animación que desees
        // Asegúrate de agregar estilos y lógica para mostrarla en el centro de la pantalla
    }
    
    // Función para ocultar la animación de carga (personalízala según tus necesidades)
    function ocultarAnimacionDeCarga() {
        // Agrega tu lógica para ocultar la animación de carga aquí
        // Por ejemplo, oculta el spinner o la animación que hayas mostrado
    }
});