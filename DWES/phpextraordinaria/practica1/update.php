<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php include 'server.php'; ?>
<?php $persona = json_decode($_POST['persona'], true); 


var_dump($persona);

echo '<form action="/phpextraordinaria/practica1/update" method="post">
    <input type="text" name="name" value="' . $persona['nombre'] . '">
    <input type="text" name="surname" value="' . $persona['apellido'] . '">
    <input type="hidden" name="id" value="' . $persona['id'] . '">
    
    <input type="submit" value="send">';
?>


    
</body>
</html>