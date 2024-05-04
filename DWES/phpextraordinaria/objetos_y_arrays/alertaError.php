<?php

class AlertaError extends Alerta
{
    
    public function mostrar()
    {
        echo "<h1 class='alert-danger'>$this->titulo;</h1>";
        echo "<div class='alert' role='alert'>";
        echo $this->mensaje;
        echo "</div>";
    }
}
?>