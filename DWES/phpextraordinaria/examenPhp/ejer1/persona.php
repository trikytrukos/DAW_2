<?php

class Persona
{

    private string $nombre;
    private int $edad;
    private string $apellido1;
    private string $apellido2;

    function getNombre(): string
    {
        return $this->nombre;
    }

    function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    function getEdad(): int
    {
        return $this->edad;
    }

    function setEdad($edad)
    {
        $this->edad = $edad;
    }

    function getApellido1(): string
    {
        return $this->apellido1;
    }

    function setApellido1($apellido1)
    {
        $this->apellido1 = $apellido1;
    }
    
    function getApellido2(): string
    {
        return $this->apellido2;
    }

    function setApellido2($apellido2)
    {
        $this->apellido2 = $apellido2;
    }


    function __toString()
    {
        return $this->nombre . " " . $this->apellido1 . " " . $this->apellido2 . " " . $this->edad;
    }
}
