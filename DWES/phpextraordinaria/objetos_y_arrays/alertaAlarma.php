<?php  

class AlertaAlarma extends Alerta
{
    
    public function mostrar()
    {
       echo "<script>alert('".$this->mensaje."');</script>";
    }
}