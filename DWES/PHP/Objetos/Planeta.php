<?php

class Planeta
{
  private $nombre;
  private $masa;
  private $diametro;
  private $distanciaSol;


  public function __construct($nombre, $masa, $diametro,  $distanciaSol)
  {
    $this->nombre = $nombre;
    $this->masa = $masa;
    $this->diametro = $diametro;
    $this->distanciaSol = $distanciaSol;
  }

  public function muestraComoDiv(){
    echo "<div style='
        background-color: #0a9fe4;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        display: flex;
        width: {$this->diametro}px;
        height: {$this->diametro}px;
    '>" . $this->nombre . '</div>';
  }



//  public function editar(){
//    echo
//  }
}