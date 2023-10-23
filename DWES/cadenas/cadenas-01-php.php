<?php
if (isset($_GET['texto'])) {
    $texto = $_GET['texto'];

    if (isset($_GET['reset']) && $_GET['reset'] === 'true') {
        // Si el parámetro "reset" es igual a "true", reseteamos la variable $texto
        $texto = "";
    }

    $vocales = "";
    $consonantes = "";

    for ($i = 0; $i < strlen($texto); $i++) {
        $caracter = $texto[$i];
        if ($caracter == 'a' || $caracter == 'e' || $caracter == 'i' || $caracter == 'o' || $caracter == 'u') {
            $vocales ++;
        }
    }

    for ($i = 0; $i < strlen($texto); $i++) {
        $caracter = $texto[$i];
        if (preg_match("/[b-df-hj-np-tv-z]/", $caracter)) {
            $consonantes ++;
        }
    }

    echo '<div>'.$texto.'</div>';
    echo '<div>'."numero de vocales: ".$vocales.'</div>';
    echo '<div>'."numero de consonantes: " . $consonantes . '</div>';
} else {
    echo "No se ha proporcionado una cadena de texto.";
}
?>