<?php

    class GestorNoRelacional extends GestorDatos{

        protected $tipo_modelo_datos;

        public function __construct($name, $description, $tipo_modelo_datos){
            parent::__construct($name, $description);
            $this->tipo_modelo_datos = $tipo_modelo_datos;
        }

        public function obtenerDetalle(){
            return "Gestor de datos no relacional: ".$this->name." - ".$this->description." - ".$this->tipo_modelo_datos;
        }
    }
?>