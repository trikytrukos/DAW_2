function cambiarImagen() {
    const imagen = document.getElementById("imagen");
    let imgLink = [ "bugattiti.jpg", "cochecito.jpg", "lamberjamber.jpg", "ñaseratti.jpg"];
    let nombreArchivoActual = imagen.src.split("/").pop();
    let indiceActual = imgLink.indexOf(nombreArchivoActual);
    let indiceSiguiente = (indiceActual + 1) % imgLink.length;
    imagen.src = imgLink[indiceSiguiente];
}