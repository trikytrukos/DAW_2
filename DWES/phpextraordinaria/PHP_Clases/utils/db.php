<?php

try{
    $db = new PDO('mysql:host=localhost;dbname=rugby', 'rugby', 'rugby');
} catch (PDOException $e) {
    echo  "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>