function cargarEjemplo(inputId) {
    const input = document.getElementById(inputId);
    var ejemplo1 = [];
    var ejemplo2 = [];

    for (let i = 0; i < 5; i++) {
        ejemplo1[i] = Math.floor(Math.random() * 100); // Genera nÃºmeros aleatorios entre 0 y 99
        ejemplo2[i] = Math.floor(Math.random() * 100);
    }

    if (inputId === "enteros1") {
        input.value = ejemplo1.join(",");
    } else if (inputId === "enteros2") {
        input.value = ejemplo2.join(",");
    }
}

function concatenar() {
    var array1 = document.getElementById("enteros1").value.split(",");
    var array2 = document.getElementById("enteros2").value.split(",");
    var resultado = array1.concat(array2);
    document.getElementById("resultado").innerText = resultado.join(", ");
}