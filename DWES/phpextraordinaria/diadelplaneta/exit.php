<?php

require 'config.php';
require 'db.php';

//! obtener o settear la pagina actual
$page = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;

//! obtener las acciones de la base de datos limitando el numero de acciones por pagina
$select = $db-> prepare('SELECT * FROM acciones LIMIT :offset, :limite');

$select-> bindValue(':limite', NUM_POR_PAGINA, PDO::PARAM_INT);
    
$select-> bindValue(':offset', NUM_POR_PAGINA * ($page - 1), PDO::PARAM_INT);

$select-> execute();
$row = $select-> fetchAll(PDO::FETCH_ASSOC);



//! calcular la cantidad de paginas
$count = $db -> query('SELECT COUNT(*) FROM acciones');
$total_actions = $count -> fetch();

$num_paginas = ceil($total_actions[0] / NUM_POR_PAGINA);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table>
        <tr>
            <th>id</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>fecha</th>
        </tr>
        <?php foreach ($row as $rows) : ?>
            <tr>
                <td><?=$rows['id']; ?></td>
                <td><?=$rows['nombre']; ?></td>
                <td><?=$rows['descripcion']; ?></td>
                <td><?=$rows['fecha']; ?></td>
                <td><img src="<?= $rows['imagen'] ?>" alt=""></td>
            </tr>
        <?php endforeach; ?>
    </table>
        
    <a href="?pagina=<?= $page == 1 ? $num_paginas : $page - 1?>"><</a>
    <?php for ($i = 1; $i <= $num_paginas; $i++) : ?>
        <a href="?pagina=<?= $i ?>"><?= $i ?></a>
    <?php endfor; ?>
    <a href="?pagina=<?= $page == $num_paginas ? 1 : $page + 1?>">></a>
    

</body>

</html>