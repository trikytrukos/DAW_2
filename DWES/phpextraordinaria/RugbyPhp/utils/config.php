<?php

define("SPAIN", "score1");
define("OPPONENT", "score2");

define("ROWS_PER_PAGE", 5);


/**
 * comprobar si un campo de texto esta vacio
 * 
 * @param mixed $data
 * @return bool
 */
function isValid($data){
    return (isset($data)  && $data != "") ? true : false;
}

/**
 * Funcion para mostrar errores en los campos de texto de un formulario
 * 
 * @param string $error_name
 * @return void
 */
function showErrors($error_name): void{
    global $array_errors;
    if(isset($array_errors[$error_name])){
        echo "<span class='error'>" . $array_errors[$error_name] . "</span>";
    }
}

/**
 * Funcion para persistencia de datos en los campos de texto de un formulario
 * 
 * @param string $data_name
 * @return void
 */
function showInput ($data_name): void{
    if(isValid($_POST[$data_name])){
        echo $_POST[$data_name];
    }
}

/**
 * Funcion para persistencia de datos en los campos select de un formulario
 * 
 * @param string $data_name
 * @param string $value
 * @return void
 */
function showSelected($data_name, $value): void{
    if(isValid($_POST[$data_name]) && $_POST[$data_name] == $value){
        echo "selected";
    }
}


/**
 * Funcion para mostrar las paginas de la tabla
 *   
 * @param int $page
 * @param int $num_paginas
 * @return void
 */ 
function showPages($page, $num_paginas){
    echo "<a href='?pagina=" . ($page == 1 ? $num_paginas : $page - 1) . "'><</a>";

    for ($i = 1; $i <= $num_paginas; $i++) {
        echo "<a href='?pagina=" . $i . "'>" . $i . "</a>";
    }

    echo "<a href='?pagina=" . ($page == $num_paginas ? 1 : $page + 1) . "'>></a>";
}



?>