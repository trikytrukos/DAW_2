<?php

function autoLoader($clase)
{
    include $clase . '.php';
}

spl_autoload_register('autoloader');

function obtener_data(string $ruta): string
{
    $random_number = rand(1, 100)*10;
    $data = fopen($ruta, "r");

    $contenido = fread($data, filesize($ruta));

    fclose($data);

    return $contenido;
}

function obtener_array_personas(int $numero_personas): array
{
    $array_personas = [];
    for ($i = 0; $i < $numero_personas; $i++) {
        $persona = new Persona();
        $persona->setNombre("Nombre" . $i);
        $persona->setApellido1("Apellido1" . $i);
        $persona->setApellido2("Apellido2" . $i);
        $persona->setEdad(rand(1, 100));
        $array_personas[] = $persona;
    }
    return $array_personas;

}


?>