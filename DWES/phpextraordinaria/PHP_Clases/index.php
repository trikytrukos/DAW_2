<?php
    spl_autoload_register(function($class){
        include "clases/$class.php";
    });

    $gestor = new GestorBasadoEnFichero("Gestor 1", "Gestor de datos basado en fichero", "CSV", "Lectura y escritura");
    $gestor2 = new GestorNoRelacional("Gestor 2", "Gestor de datos no relacional", "JSON");
    $gestor3 = new GestorRelacional("Gestor 3", "Gestor de datos relacional", "linux", "mint", "RTX");
    $array = [$gestor, $gestor2, $gestor3];


function html_render($gestor){
    $generator = $gestor->obtenerDetalle();
    foreach($generator as $key=>$value){
        if($key == 0){
            echo "<h1>$value</h1>";
        }else if($key == 1){
            echo "<p>$value</p>";
        }else{
            echo "<p>$value</p>";
        }    
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php foreach($array as $gestor): ?>
        <?= html_render($gestor); ?>
    <?php endforeach ?>
    
</body>
</html>
