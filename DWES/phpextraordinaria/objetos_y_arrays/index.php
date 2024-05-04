<?php
spl_autoload_register(function ($class){
    include $class. '.php';
});

$num_alertas = 10;

for ($i = 0; $i < $num_alertas; $i++) {
    $tipo = rand(1, 3);
    switch ($tipo) {
        case 1:
            $alerta = new AlertaWarning("Esto es una alerta de tipo warning", "Warning" );
            break;
        case 2:
            $alerta = new AlertaError("Esto es una alerta de tipo error", "Error");
            break;
        case 3:
            $alerta = new AlertaAlarma("Esto es una alerta de tipo alarma", "Alarma");
            echo $alerta->mostrar(); 
            continue 2;
    }
    echo $alerta->mostrar();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .warning-alert{
            text-decoration: underline  yellow solid;
        }
        .alert-danger{
            text-decoration: underline  red solid;
        }
        
    </style>
</head>
<body>
</body>
</html>