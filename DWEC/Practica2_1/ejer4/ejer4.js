let numeros = [];

function anadirValor() {
    var numerosArray = document.getElementById("barra").value;
    var numeroAnadir = document.getElementById("numeroAñadir").value;
    var posicion = parseInt(document.getElementById("posicion").value);
    console.log("Función anadirValor() se ha llamado.");
    numeros = numerosArray.split(",").map(Number);

    numeros.splice(posicion - 1,0,Number(numeroAnadir));

    var resultado = document.getElementById("resultado")
    resultado.innerHTML= numeros.join(",");
    console.log("Función anadirValor() se ha llamado.");
}

function generarAleatoria() {
    var cadena = "";
    for (let i = 0; i < 4; i++) {
        let numeroAleatorio = getRandomInt(1, 100);
        cadena += numeroAleatorio;
        if (i < 3) {
            cadena += ",";
        }
    }
    return cadena;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarEjemplo() {
    var cadenaEjemplo = document.getElementById("barra");
    cadenaEjemplo.value = generarAleatoria();
}
