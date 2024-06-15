<?php
    $file_data = file(JSON_FILE);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php if(file_exists(JSON_FILE)): ?>
    <h1>Archivo JSON</h1>
    <table>
        <tr>
            <th>Nickname</th>
            <th>Nombre</th>
            <th>Departamento</th>
        </tr>
        <?php foreach ($file_data as $data): ?>
            <?php $data = json_decode($data, true) ?>
            <tr>
                <td><?= $data["nickname"] ?></td>
                <td><?= $data["name"] ?></td>
                <td><?= $data["department"] ?></td>
            </tr>
        <?php endforeach?>
    </table>
    <?php endif ?>    
</body>
</html>