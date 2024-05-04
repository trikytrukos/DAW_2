<?php

class AlertaWarning extends Alerta
{

    public function mostrar()
    {
        echo "<h1 class='alert warning-alert'>";
        echo $this->titulo, "!";
        echo "</h1>";
        echo "<span role='alert'>";
        echo $this->mensaje;
        echo "</span>";
    }
}
?>