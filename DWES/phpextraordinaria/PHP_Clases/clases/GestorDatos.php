<?php

    abstract class GestorDatos{

        protected $name;
        protected $description;

        public function __construct($name, $description){
            $this->name = $name;
            $this->description = $description;
        }

        public abstract function obtenerDetalle();

        
    }

?>