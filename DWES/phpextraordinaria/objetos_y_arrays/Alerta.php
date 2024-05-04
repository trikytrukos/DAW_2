<?php

abstract class Alerta
{
    public $mensaje;
    public $titulo;

    public function __construct($mensaje, $titulo)
    {
        $this->mensaje = $mensaje;
        $this->titulo = $titulo;
    }

    abstract function mostrar();
}
?>