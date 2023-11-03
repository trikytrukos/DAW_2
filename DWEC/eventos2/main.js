const boton = document.getElementById("miBoton");
const div = document.getElementById("miDiv");
const nuevoBoton = document.getElementById("miNuevoBoton");
const miInput = document.getElementById("miInput");
const formulario = document.getElementById("miFormulario");
const saludarBoton = document.getElementById("saludarBoton");
const iniciarContadorBoton = document.getElementById("iniciarContador");
const nuevoDiv = document.getElementById("miNuevoDiv");
const nuevoInput = document.getElementById("miNuevoInput");
const draggable = document.getElementById("draggable");
const droppable = document.getElementById("droppable");


let contador = 0;
let intervalID;

boton.addEventListener("click", (event) => {
    alert("Se ha pulsado mi botón");
});

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "lightblue";
});

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "";
});

nuevoBoton.addEventListener("mousedown", () => {
    nuevoBoton.innerHTML = "Estás presionando el botón";
});

nuevoBoton.addEventListener("mouseup", () => {
    nuevoBoton.innerHTML = "Haz clic y mantén presionado";
});

miInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        alert("La tecla Enter ha sido presionada.");
    }
});

miInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 32) {
        alert("La tecla Espacio ha sido soltada.");
    }
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formulario.elements.nombre.value === '' || formulario.elements.email.value === '') {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
    } else {
        alert("Formulario enviado correctamente");
    }
});

formulario.addEventListener("change", (event) => {
    console.log("El valor del formulario ha cambiado a: " + event.target.value);
});

formulario.addEventListener("input", (event) => {
    console.log("El valor del formulario ha cambiado a: " + event.target.value);
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formulario.elements.nombre.value === '' || formulario.elements.email.value === '') {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
    } else {
        alert("Formulario enviado correctamente");
    }
});

const miImagen = document.getElementById("miImagen");
miImagen.addEventListener("load", () => {
    alert("La imagen se ha cargado correctamente.");
});

const miParrafo = document.getElementById("miParrafo");
document.addEventListener("DOMContentLoaded", () => {
    miParrafo.textContent = "¡El documento se ha cargado completamente!";
});

saludarBoton.addEventListener("click", () => {
    setTimeout(() => {
        alert("¡Hola, mundo!");
    }, 2000);
});


iniciarContadorBoton.addEventListener("click", () => {
    contador = 0;
    intervalID = setInterval(() => {
        contador++;
        console.log("Contador: " + contador);

        // Detén el intervalo después de 5 segundos (5000 ms)
        if (contador >= 5) {
            clearInterval(intervalID);
            console.log("Intervalo detenido después de 5 segundos.");
        }
    }, 1000);
});



nuevoDiv.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Has hecho clic derecho en el div.");
});

nuevoInput.addEventListener("focus", () => {
    nuevoInput.style.backgroundColor = "lightblue";
});

nuevoInput.addEventListener("blur", () => {
    nuevoInput.style.backgroundColor = "white";
});

draggable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", "Este es un elemento arrastrable");
});

droppable.addEventListener("dragover", (event) => {
    event.preventDefault();
});

droppable.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    droppable.innerHTML = data;
});


window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = '¡Espera un momento! ¿Estás seguro de que deseas abandonar esta página?';
});