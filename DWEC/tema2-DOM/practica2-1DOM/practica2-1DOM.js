
function resaltar(inputID) {
    const section = document.getElementById(inputID);
    section.classList.toggle('resaltar');
}

function ocultar(inputID) {
    const section = document.getElementById(inputID);
    section.classList.add('oculto');
}
function mostrarUno(inputID){
    const section = document.getElementById(inputID);
    section.classList.remove('oculto');
}

function mostrar() {
    const elementos = document.getElementsByTagName('*');

    for (const elemento of elementos) {
        if (elemento.classList.contains('oculto')) {
            elemento.classList.remove('oculto');
        }
    }
}