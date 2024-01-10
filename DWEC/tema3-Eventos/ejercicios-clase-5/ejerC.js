var lista = document.getElementById("miLista");
var mensaje = document.getElementById("mensaje");

// Agrega un evento clic a cada elemento de la lista
var elementosLista = lista.getElementsByTagName("li");
for (var i = 0; i < elementosLista.length; i++) {
    elementosLista[i].addEventListener("click", function() {
        // Obtén el texto del elemento de la lista clicado
        var textoElemento = this.textContent;

        if (this.id === "elementoEspecial") {
            // Si el clic se hizo en el elemento especial, muestra un mensaje especial
            mensaje.textContent = "Hiciste clic en el elemento especial";
        } else {
            // Si el clic se hizo en cualquier otro elemento, muestra un mensaje genérico
            mensaje.textContent = "Hiciste clic en: " + textoElemento;
            // Muestra un mensaje de alerta solo si no es el elemento especial
            alert("Hiciste clic en la lista");
        }
    });
}