<?php
$nombre="Miguel";
$apodo="triky";
$texto="lorem ipsum";
$fecha=date("H:m:s");
$segundo=date("s");
if ($segundo%2==0){
    $color="green";
}else{
    $color="white";
}
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>presentation</title>
    <style>
        body{
            background-color: <?php echo  $color?>;
        }
    </style>

</head>
<body style=
background-color:>

<h1><?php echo $nombre?></h1>
<h2><?php echo $apodo?></h2>
<p><?php  echo $texto?></p>
<div>
    <?php echo $fecha?>
</div>

</body>
</html>