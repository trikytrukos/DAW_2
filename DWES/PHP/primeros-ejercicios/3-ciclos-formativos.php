<?php include'3-php.php'?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ciclos formativos</title>
</head>
<body>
<h1>Ciclos Formativos</h1>
<ul>
    <?php foreach ($ciclos as $nombre => $descripcion) { ?>
        <li><a href="detalle.php?nombre=<?= urlencode($nombre) ?>"> <?= $nombre ?></a></li>
    <?php } ?>
</ul>
</body>
</html>
