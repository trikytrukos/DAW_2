<?php
require 'db.php';
require 'config.php';


$array_errors = array();

function isValid($data)
{
    return (isset($data)  && $data != "") ? true : false;
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['send1'])) {

    if (!isValid($_POST['nombre'])) {
        $array_errors[] = "El nombre es obligatorio";
    }
    if (!isValid($_POST['date'])) {
        $array_errors[] = "La fecha es obligatoria";
    }
    if (isValid($_POST['date']) && $_POST['date'] < MIN_DATE) {
        $array_errors[] = "La fecha no puede ser menor a " . MIN_DATE;
    }
    if (isValid($_POST['date']) && $_POST['date'] > CURRENT_DATE) {
        $array_errors[] = "La fecha no puede ser mayor a " . CURRENT_DATE;
    }
    if (!isValid($_POST['place'])) {
        $array_errors[] = "El lugar es obligatorio";
    }
    if (!isValid($_POST['description'])) {
        $array_errors[] = "La descripcion es obligatoria";
    }
    
    // Validación de archivo
    if(!isset($_FILES['file']['error']) || $_FILES['file']['error'] != 0){
        $array_errors[] = "La imagen es obligatoria";
    }else{

    $nombreArchivo = basename($_FILES["file"]["name"]);

    $archivo = PATH . $nombreArchivo;

    // Si el archivo ya existe, añadir un número al final
    $contador = 1;
    while (file_exists($archivo)) {
    
       $nombreSinExtension = pathinfo($nombreArchivo, PATHINFO_FILENAME);
        $formatoImagen = strtolower(pathinfo($nombreArchivo, PATHINFO_EXTENSION));

        $archivo = PATH . $nombreSinExtension . '(' . $contador . ').' . $formatoImagen;
        $contador++;
    }

    // Verifica si es una imagen real o una imagen falsa
    $check = getimagesize($_FILES["file"]["tmp_name"]);

    if($check !== false) {
        move_uploaded_file($_FILES["file"]["tmp_name"], $archivo);
    } else {
        $array_errors[] = "El archivo no es una imagen";
    }
}

    if (empty($array_errors)) {
        $name = $_POST['nombre'];
        $date = $_POST['date'];
        $place = $_POST['place'];
        $description = $_POST['description'];
        $file = $archivo;

        $insert = $db->prepare('INSERT INTO acciones (nombre, fecha, lugar, descripcion, imagen) VALUES (:nombre, :fecha, :lugar, :descripcion, :imagen)');

        $insert->bindValue(':nombre', $name);
        $insert->bindValue(':fecha', $date);    
        $insert->bindValue(':lugar', $place);
        $insert->bindValue(':descripcion', $description);
        $insert->bindValue(':imagen', $file);

        try {
            $insert->execute();
        } catch (PDOException $e) {
            echo "Error al insertar datos: " . $e->getMessage();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>

<body>

    <?php foreach ($array_errors as $error) : ?>
        <p class="error"> <?= $error; ?></p>
    <?php endforeach; ?>

    <form action="index.php" method="post" enctype="multipart/form-data">
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" value="<?= isValid($_POST["nombre"]) ? $_POST["nombre"] : "" ?>">
        </div>
        <div>
            <label for="date">fecha:</label>
            <input type="date" name="date" value="<?= isValid($_POST["date"]) ? $_POST["date"] : "" ?>">
        </div>
        <div>
            <label for="place">Lugar:</label>
            <input type="text" name="place" value="<?= isValid($_POST["place"]) ? $_POST["place"] : "" ?>">
        </div>
        <div>
            <label for="description">Descripcion:</label>
            <textarea name="description" cols="30" rows="10"><?= isValid($_POST["description"]) ? $_POST["description"] : "" ?></textarea>
        </div>
        <div>
            <label for="file">Imagen:</label>
            <input type="file" name="file" >
        </div>

        <button type="submit" name="send1">Enviar</button>
    </form>



    <?php include_once 'exit.php'; ?>

</body>

</html>