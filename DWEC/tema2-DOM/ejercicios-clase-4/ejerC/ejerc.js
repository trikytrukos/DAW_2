document.getElementById("resaltarSiguientes").addEventListener("click", function() {
    var primerParrafo = document.getElementById("contenedor").getElementsByTagName("p")[0];
    var siguienteElemento = primerParrafo.nextSibling;

    // Verificar si el siguiente nodo es un elemento span y resaltarlo
    if (siguienteElemento && siguienteElemento.tagName == "SPAN") {
        siguienteElemento.classList.add("resaltado");
    }
});

document.getElementById("resaltarAnteriores").addEventListener("click", function() {
    var segundoParrafo = document.getElementById("contenedor").getElementsByTagName("p")[1];
    var anteriorElemento = segundoParrafo.previousSibling;

    // Verificar si el nodo anterior es un elemento span y agregar la clase de estilo "resaltado"
    if (anteriorElemento && anteriorElemento.tagName == "SPAN") {
        anteriorElemento.classList.add("resaltado");
    }
});
