function valor(){
    document.getElementById("textoInicial").value="¡El contenido ha sido cambiado!";

}
function TextContent(){
    const parrafo= document.getElementById("textoCambiado");
    parrafo.textContent= "¡El contenido ha sido cambiado!";
}

function InnerHtml(){
    const parrafo= document.getElementById("textoCambiado");
    parrafo.innerHTML= "<b>¡El contenido ha sido cambiado!</b>";
}