<?php
require "config.php";


$array_errors = array();

    if($_SERVER["REQUEST_METHOD"] == "POST"){

        if(!isValid($_POST["nickname"])){
            $array_errors["nickname"] = "El nickname es obligatorio";
        }

        if(!isValid($_POST["name"])){
            $array_errors["name"] = "El nombre es obligatorio";
        }

        if(!isValid($_POST["department"])){
            $array_errors["department"] = "El departamento es obligatorio";
        }


        if(empty($array_errors)){
            $nombre = $_POST["name"];
            $nickname = $_POST["nickname"];
            $departamento = $_POST["department"];

            switch ($_POST["save"]) {
                case 'json':
                    file_put_contents(JSON_FILE, json_encode(array("nickname" => $nickname, "name" => $nombre, "department" => $departamento)), FILE_APPEND);
                    break;
                case 'csv':
                    file_put_contents(CSV_FILE, $nickname . ";" . $nombre . ";" . $departamento . "\n", FILE_APPEND);
                    break;
                case 'both':
                    file_put_contents(JSON_FILE, json_encode(array("nickname" => $nickname, "name" => $nombre, "department" => $departamento)), FILE_APPEND);
                    file_put_contents(CSV_FILE, $nickname . ";" . $nombre . ";" . $departamento . "\n", FILE_APPEND);
                    break;
            }
        }

    }

?>