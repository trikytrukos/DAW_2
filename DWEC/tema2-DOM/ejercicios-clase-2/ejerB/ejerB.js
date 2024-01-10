function cambiarContenido(){
    const parrafo= document.getElementById("parrafo");
    parrafo.textContent= "¡El contenido ha sido cambiado!";
}

function cambiarHtml(){
    const parrafo= document.getElementById("parrafo");
    parrafo.innerHTML= "<b>¡El contenido ha sido cambiado!</b>";
}