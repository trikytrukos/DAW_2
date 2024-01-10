function cargarEjemplo(inputId) {
    const input = document.getElementById(inputId);
    var ejemplo1 = [];

    for (let i = 0; i < 5; i++) {
        ejemplo1[i] = Math.floor(Math.random() * 100);
    }
    input.value = ejemplo1.join(",");
}

function ascendente(inputId) {
    var numeros = document.getElementById(inputId).value.split(",");
    numeros.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("numerosAscendentes").innerText = numeros.join(",");
}

function descendente(inputId){
    var numeros = document.getElementById(inputId).value.split(",");
    numeros.sort(function (a, b) {
        return b - a;
    });
    document.getElementById("numerosDescendentes").innerText = numeros.join(",");
}