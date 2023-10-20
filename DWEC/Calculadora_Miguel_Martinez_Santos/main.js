let argumentos = "";
let resultado = null;
let ultimaEntradaEsNumero = false;
let nuevaOperacion = true;


function mostrarEnPantalla(valor) {
    if (nuevaOperacion) {
        argumentos = "";
        resultado = null;
        nuevaOperacion = false;
    }
    argumentos += valor;
    document.getElementById("argumentos").value = argumentos;
    ultimaEntradaEsNumero = true;
}

function mostrarOperador(valor) {
    if (resultado !== null) {
        argumentos = resultado + valor;
        resultado = null;
        nuevaOperacion = false;
    } else if (ultimaEntradaEsNumero) {
        argumentos += valor;
        ultimaEntradaEsNumero = false;
    }
    document.getElementById("argumentos").value = argumentos;
}

function borrarPantalla() {
    argumentos = "";
    resultado = null;
    document.getElementById("argumentos").value = "";
    ultimaEntradaEsNumero = false;
    nuevaOperacion = true;
}

function borrarCaracter() {
    if (resultado !== null) {
        argumentos = resultado.toString().slice(0, -1);
        resultado = null;
        nuevaOperacion = false;
    } else if (ultimaEntradaEsNumero) {
        argumentos = argumentos.slice(0, -1);
    }
    document.getElementById("argumentos").value = argumentos;
}

function calcularResultado() {
    try {
        resultado = eval(argumentos);
        document.getElementById("argumentos").value = resultado;
        nuevaOperacion = true;
        ultimaEntradaEsNumero = true;
    } catch (error) {
        document.getElementById("argumentos").value = "Error";
    }
}

function calcularRaizCuadrada() {
    try {
        if (resultado!=null){
            argumentos= resultado.toString();
            resultado = Math.sqrt(eval(argumentos));
            document.getElementById("argumentos").value = resultado;
            nuevaOperacion = true;
            ultimaEntradaEsNumero = true;
        }else{
            resultado = Math.sqrt(eval(argumentos));
            document.getElementById("argumentos").value = resultado;
            nuevaOperacion = true;
            ultimaEntradaEsNumero = true;
        }

    } catch (error) {
        document.getElementById("argumentos").value = "Error";
    }
}