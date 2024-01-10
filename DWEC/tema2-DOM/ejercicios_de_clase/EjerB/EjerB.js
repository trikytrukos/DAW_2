function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambio() {
    let lista = document.getElementsByClassName("lista")[0];
    let elementosLi = lista.children;

    for (let i = 0; i < elementosLi.length; i++) {
        elementosLi[i].style.backgroundColor = getRandomColor();
    }
}
