<?php
    require "utils/validations.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .error{
            color: red;
        }
    </style>
</head>
<body>

<form action="index.php" method="post">
    <div>
        <label for="nickname">Nickname</label>
        <input type="text" name="nickname" id="nickname" value="<?php showInput("nickname") ?>">
        <?php showErrors("nickname") ?>
    </div>
    <div>
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name" value="<?php showInput("name") ?>">
        <?php showErrors("name") ?>
    </div>
    <div>
        <label for="department">Departamento</label>
        <select name="department" id="department">
            <option value="compras" <?php showSelected("department", "compras")?>>Compras</option>
            <option value="ventas" <?php showSelected("department", "ventas")?>>Ventas</option>
            <option value="informatica" <?php showSelected("department", "informatica")?>>Informática</option>
            <option value="contabilidad" <?php showSelected("department", "contabilidad")?>>Contabilidad</option>
        </select>
    </div>
    <div>
        <label for="save">Guardar en:</label>
        <select name="save" id="save">
            <option value="json" <?php showSelected("save", "json")?>>JSON</option>
            <option value="csv" <?php showSelected("save", "csv")?>>CSV</option>
            <option value="both" <?php showSelected("save", "both")?>>Ambos</option>
        </select>
    </div>
    <button type="submit" name="sendButton">Enviar</button>

    <?php include "JsonExit.php" ?>
    <?php include "CsvExit.php" ?>
    

</form>
    
</body>
</html>