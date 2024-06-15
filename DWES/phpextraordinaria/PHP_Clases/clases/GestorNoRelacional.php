<?php

    class GestorNoRelacional extends GestorDatos{

        private $tipo_modelo_datos;

        public function __construct($name, $description, $tipo_modelo_datos){
            parent::__construct($name, $description);
            $this->tipo_modelo_datos = $tipo_modelo_datos;
        }

        public function obtenerDetalle(){
            
            yield $this->name;
            yield $this->description;
            
            yield $this->tipo_modelo_datos;
        }
    }
?>