function mostrarInfoTecla(event) {
    var teclaInfo = document.getElementById("teclaInfo");
    var codigoTecla = event.keyCode || event.which;
    var teclaPresionada = String.fromCharCode(codigoTecla);

    
    console.log("Código de la tecla: " + codigoTecla);
    console.log("Tecla presionada: " + teclaPresionada);

    teclaInfo.innerHTML = "Código de la tecla: " + codigoTecla + "<br>Tecla presionada: " + teclaPresionada;
}


document.addEventListener("keydown", mostrarInfoTecla);