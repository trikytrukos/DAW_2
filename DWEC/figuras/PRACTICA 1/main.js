var lados = 10;

function generarCuadrado(){
    var lados= 10;
    var div = document.getElementById("cuadrado");
    div.innerHTML = "";
    // <= lados en ambos bucles
    for (let i = 0; i <=lados; i++){
        for (let j = 0; j <=lados; j++){
            div.innerHTML += " *&nbsp;";
        }
        div.innerHTML += "<br>";
    }
}

function generarCuadradoVacio(){
    var lados= 10;
    var div = document.getElementById("cuadradoVacio");
    div. innerHTML = "";
    // <= que lados en ambos bucles con un if para la primera y la última columna
    for (let i = 0; i <= lados; i++){
        for (let j = 0; j <= lados; j++){
            if(i === 0 || j === 0 || i === lados || j === lados){
                div.innerHTML += " *&nbsp;";
            }else{
                div.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;"
            }
        }
        div.innerHTML += "<br>";
    }
}

function generarTrianguloDerecho(id){
    var div = document.getElementById(id);
    div.innerHTML = "";
    // 3 bucles: i <= lados; j <= n - i ; k <= i
    for(let i = 0; i <= lados; i++){
        for(let j = 0; j <= lados - i; j++){
            div.innerHTML += "&nbsp;&nbsp;";
        }
        for(let k = 0; k <= i; k++){
            div.innerHTML += "*";
        }
        div.innerHTML += "<br>";
    }
    return div.innerHTML;
}

function generarTrianguloIzquierdo(id){
    var div = document.getElementById(id);
    div.innerHTML = "";
    // 3 bucles: i <= lados; j <= lados - i ; k <= i
    for(let i = 0; i <= lados; i++){
        for(let j = 0; j <= lados - i; j++){
            div.innerHTML += "";
        }
        for(let k = 0; k <= i; k++){
            div.innerHTML += "*";
        }
        div.innerHTML += "<br>";
    }
    return div.innerHTML;
}

function generarTriangulo(id){
    var div = document.getElementById(id);
    div.innerHTML = "";
    //tres bucles: i <= lados; j <= lados - i; k = 2 * i
    for(let i = 0; i <= lados; i++){
        for (let j = 0; j <= lados -i; j++){
            div.innerHTML += "&nbsp;&nbsp;";
        }
        for (let k = 0; k <= 2 * i; k++){
            div.innerHTML += "*";
        }
        div.innerHTML += "<br>";
    }
}

function generarTrianguloVacio(){
    var div = document.getElementById("trianguloVacio");
    div.innerHTML = "";

    for(let i = 1; i <= lados; i++){
        for(let j = 1; j <= lados - i; j++){
            div.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for(let k = 0; k < 2*i-1; k++){
            if(i === 1 || i === lados){
                div.innerHTML += "*&nbsp;";
            }else{
                if(k === 0 || k === 2*i-2){
                    div.innerHTML += "*&nbsp;";
                }else{
                    div.innerHTML += "&nbsp;&nbsp;&nbsp;"
                }
            }
        }
        div.innerHTML += "<br>";
    }
}