<?php

    class GestorBasadoEnFichero extends GestorDatos{

        protected $formato_archivo;
        protected $modo_acceso;

        public function __construct($name, $description, $formato_archivo, $modo_acceso){
            parent::__construct($name, $description);
            $this->formato_archivo = $formato_archivo;
            $this->modo_acceso = $modo_acceso;
        }

        public function obtenerDetalle(){
            return "Gestor de datos basado en fichero: ".$this->name." - ".$this->description." - ".$this->formato_archivo." - ".$this->modo_acceso;
        }
        
    }
?>