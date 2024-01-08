let empezar = document.getElementById("empezar");
//se crea una variable para que el juego se pueda jugar mientras aun no se haya perdido
let gamelost = false;
//array que contendrá la secuencia de colores que se vaya generando
let colores = new Array();
let secuenciaUsuario = [];

const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const amarillo = document.getElementById("amarillo");


function jugar() {
    if (!gamelost) {
        colorRandom();
        mostrarSecuencia().then(() => {
            // Una vez que la secuencia se ha mostrado, permitir la entrada del usuario
            secuenciaUsuario = []; // Limpiar la secuencia del usuario para la nueva ronda
        });
    } else {
        // Lógica para cuando el jugador pierde
    }
}

//funcion que genera aleatoriamente colores siguientes
function colorRandom() {
    let random = Math.floor(Math.random() * 4);
    switch (random) {
        case 0:
            colores.push("rojo");
            break
        case 1:
            colores.push("verde");
            break
        case 2:
            colores.push("azul");
            break
        case 3:
            colores.push("amarillo");
            break
    }

}

function mostrarSecuencia() {
    return new Promise((resolve) => {
        let i = 0;
        const intervalo = setInterval(() => {
            if (i >= colores.length) {
                clearInterval(intervalo);
                resolve(); // Resolver la promesa cuando la secuencia se haya mostrado completamente
                return;
            }
            iluminarColor(colores[i]);
            i++;
        }, 400);
    });
}

function iluminarColor(color) {
    const colorDiv = document.getElementById(color);
    let colorIluminado = "";

    switch (color) {
        case "rojo":
            colorIluminado = "naranja";
            break;
        case "verde":
            colorIluminado = "lightgreen";
            break;
        case "azul":
            colorIluminado = "lightblue";
            break;
        case "amarillo":
            colorIluminado = "white";
            break;
    }

    colorDiv.classList.add(colorIluminado);
    setTimeout(() => {
        colorDiv.classList.remove(colorIluminado);
    }, 300);
}

function configurarInputUsuario() {
    [rojo, verde, azul, amarillo].forEach(colorDiv => {
        colorDiv.addEventListener('click', () => {
            usuarioSeleccionaColor(colorDiv.id);
            verificarSecuenciaUsuario();
        });
    });
}

function usuarioSeleccionaColor(color) {
    secuenciaUsuario.push(color);
    iluminarColor(color);
}

function verificarSecuenciaUsuario() {
    if (secuenciaUsuario.length === colores.length) {
        for (let i = 0; i < secuenciaUsuario.length; i++) {
            if (secuenciaUsuario[i] !== colores[i]) {
                gamelost = true;
                alert("Has perdido el juego");
                break;
            }
        }

        if (!gamelost) {
            secuenciaUsuario = [];
            jugar();
        }
    }
}

empezar.addEventListener('click', () => {
    gamelost = false;
    colores = [];
    secuenciaUsuario = [];
    jugar();
});

configurarInputUsuario();
