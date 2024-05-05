<?php
require 'db.php';
require 'config.php';

$array_errors = array();


if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['butt1'])){

    if(!isValid($_POST['country'])){
        $array_errors['empty_country'] = "El país es obligatorio";
    }

    if(!isValid($_POST[SPAIN])){
        $array_errors['score'] = "El marcador es obligatorio";
    } elseif($_POST[SPAIN] < 0){
        $array_errors['score'] = "El marcador no puede ser negativo";
    }

    if(!isValid($_POST[OPPONENT])){
        $array_errors['score'] = "El marcador es obligatorio";
    } elseif($_POST[OPPONENT] < 0){
        $array_errors['score'] = "El marcador no puede ser negativo";
    }
    

    if (empty($array_errors)){

        $country = $_POST['country'];
        $result = $_POST['result'];
        $score = $_POST[SPAIN] . "-" . $_POST[OPPONENT];


        $insert = $db -> prepare("INSERT INTO matches (country, result, score) VALUES (:country, :result, :score)");

        $insert -> execute(array(
            ':country' => $country,
            ':result' => $result,
            ':score' => $score
        ));

        
    }
}


?>