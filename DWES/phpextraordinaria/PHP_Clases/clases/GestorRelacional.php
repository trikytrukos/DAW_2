<?php

class GestorRelacional extends GestorDatos
{

    private $sistemas_operativos;
    private $version;
    private $transacction_support;

    public function __construct($name, $description, $sistemas_operativos, $version, $transacction_support)
    {
        parent::__construct($name, $description);
        $this->sistemas_operativos = $sistemas_operativos;
        $this->version = $version;
        $this->transacction_support = $transacction_support;
    }


    public function obtenerDetalle()
    {
        yield $this->name;
        yield $this->description;

        yield $this->sistemas_operativos;
        yield $this->version;
        yield $this->transacction_support;
    }
}

?>