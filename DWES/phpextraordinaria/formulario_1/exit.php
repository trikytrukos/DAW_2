<?php

    $name = urldecode($_GET["name"]);
    $address = urldecode($_GET["address"]);
    $dishes = urldecode($_GET["dishes"]);
    $vegetariano = urldecode($_GET["vegetariano"]);
    $alergias = urldecode($_GET["alergias"]);
    if(isset($alergias)){
        
        if (is_array($alergias)) {
            $alergiasarray = implode(",", $alergias);
        }else{
            $alergias = "No tiene alergias";
        }
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formulario</h1>
    <div>
        <p>Nombre: <?= $name ?></p>
        <p>Direccion: <?= $address ?></p>
        <p>Numero de platos: <?= $dishes ?></p>
        <p>Vegetariano: <?= $vegetariano ?></p>
        <p>Alergias: <?= $alergias ?></p>
    </div>
    
</body>
</html>