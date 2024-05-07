<?php

    class GestorBasadoEnFichero extends GestorDatos{

        private $formato_archivo;
        private $modo_acceso;

        public function __construct($name, $description, $formato_archivo, $modo_acceso){
            parent::__construct($name, $description);
            $this->formato_archivo = $formato_archivo;
            $this->modo_acceso = $modo_acceso;
        }

        public function obtenerDetalle(){
            yield $this->name;
            yield $this->description;

            yield $this->formato_archivo;
            yield $this->modo_acceso;
        }
        
    }
?>