<?php
    $file_data = file(CSV_FILE);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php if(file_exists(CSV_FILE)): ?>
    <h1>Archivo CSV</h1>
    <table>
        <tr>
            <th>Nickname</th>
            <th>Nombre</th>
            <th>Departamento</th>
        </tr>
        <?php foreach ($file_data as $data): ?>
            <?php $data = explode(";", $data) ?>
            <tr>
                <td><?= $data[0] ?></td>
                <td><?= $data[1] ?></td>
                <td><?= $data[2] ?></td>
            </tr>    
        <?php endforeach ?>
    </table>
    <?php endif ?>
    
</body>
</html>