<?php
$frase = "hola mundo!";
$imagen="images.jpg";
$autor = "Miguel";
$fecha = date("d:m:Y H:m:s")

?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Presentacion</title>
</head>
<body>

<h1><?php echo $frase ?></h1>
<img src="<?php echo $imagen ?>"></img>
<h2>autor:<?php echo $autor ?></h2>
<div>
    <?php echo $fecha ?>
</div>
</body>
</html>
