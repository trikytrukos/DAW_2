<?php
define("JSON_FILE", "data/nicknames.json");
define("CSV_FILE", "data/nicknames.csv");

function isValid($data){
    return (isset($data)  && $data != "") ? true : false;
}

function showErrors($error_name): void{
    global $array_errors;
    if(isset($array_errors[$error_name])){
        echo "<span class='error'>" . $array_errors[$error_name] . "</span>";
    }
}

function showInput ($data_name): void{
    if(isValid($_POST[$data_name])){
        echo $_POST[$data_name];
    }
}

function showSelected($data_name, $value): void{
    if(isValid($_POST[$data_name]) && $_POST[$data_name] == $value){
        echo "selected";
    }
}


function showPages($page, $num_paginas){
    echo "<a href='?pagina=" . ($page == 1 ? $num_paginas : $page - 1) . "'><</a>";

    for ($i = 1; $i <= $num_paginas; $i++) {
        echo "<a href='?pagina=" . $i . "'>" . $i . "</a>";
    }

    echo "<a href='?pagina=" . ($page == $num_paginas ? 1 : $page + 1) . "'>></a>";
}
?>