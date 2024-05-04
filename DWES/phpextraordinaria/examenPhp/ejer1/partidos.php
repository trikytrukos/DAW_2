<?php

class Partidos
{
    private Persona $persona1;
    private Persona $persona2;
    private string $resultado;
    private string $fecha;

    function getPersona1(): Persona
    {
        return $this->persona1;
    }

    function setPersona1($persona1)
    {
        $this->persona1 = $persona1;
    }

    function getPersona2(): Persona
    {
        return $this->persona2;
    }

    function setPersona2($persona2)
    {
        $this->persona2 = $persona2;
    }

    function getResultado(): string
    {
        return $this->resultado;
    }

    function setResultado($resultado)
    {
        $this->resultado = $resultado;
    }

    function getFecha(): string
    {
        return $this->fecha;
    }

    function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    function __toString()
    {
        return $this->persona1 . " " . $this->persona2 . " " . $this->resultado . " " . $this->fecha;
    }

    

}

