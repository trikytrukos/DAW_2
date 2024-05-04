<?php

    $array_errors = array ();

    function isvalid($data){
        return (isset($data) && $data != "") ? true : false; 
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['botonPula'])){
        if(!isvalid($_POST['name'])){
            $array_errors['NameError'] = "El nombre es obligatorio";
        }
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formulario_3</title>
    <style>
        .NameError{
            color: red;
        }
    </style>
</head>
<body>
    <h1>Formulario Pula</h1>
    <form action="index.php" method="post">
        <label for="name">Nombre: </label>
        <input type="text" name="name" id="name" placeholder="nombre">
        <span class="NameError"><?=(isset($array_errors)) ? $array_errors["NameError"] : "" ?></span>
        <button type="submit" name="botonPula" >Enviar</button>
    </form>
</body>
</html>