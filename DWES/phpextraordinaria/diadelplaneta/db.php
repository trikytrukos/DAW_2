<?php

try{
    $db = new PDO('mysql:host=localhost;dbname=acciones', 'acciones', 'acciones');
} catch (PDOException $e) {
    echo  "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}