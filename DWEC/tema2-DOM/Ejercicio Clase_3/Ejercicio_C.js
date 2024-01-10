function resaltar(){
    const parrafo = document.getElementById("parrafo");
    parrafo.classList.toggle("resaltar");
}

function comprobar(){
    const comprobante = document.getElementById("comprobante")
    if(parrafo.classList.contains("resaltar")){
        comprobante.textContent="La clase resaltar se esta aplicando.";
    }
    else{
        comprobante.textContent="La clase resaltar NO se esta aplicando.";
    }
}