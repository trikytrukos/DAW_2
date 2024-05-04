<?php 

include_once 'server.php';

$personas = selectAll($mysqli);

$tot_personas = $personas->num_rows;
// echo $tot_personas;

$num_pers_pag = 5;

$num_pags = ceil($tot_personas / $num_pers_pag);

echo $num_pags;

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php

    if (!$_GET) {
        header("Location: index.php?page=1");
    }

    $iniciar= $num_pers_pag * ($_GET['page'] - 1);

    $query = "SELECT * FROM persona Limit $iniciar, $num_pers_pag";

    $total_personas = $mysqli->query($query);

    ?>
    <form action="/phpextraordinaria/practica1/insertar" method="post">
        <input type="text" name="name" placeholder="nombre">
        <input type="text" name="surname" placeholder="apellido">
        <input type="submit" value="send">
    </form>



    <table>
        <tr>
            
            <?php echo '<form action="/phpextraordinaria/practica1/eliminar" method="post">';
            foreach ($total_personas as $persona) {
                echo '<tr>
                    <td>"' . $persona['nombre'] . '" </td>
                    <td>"' . $persona['apellido'] . '"</td>
                    <td>
                        <input type= "checkbox" name="checklist[]" value="' . $persona['id'] . '">
                    </td>
                    <td>
                        <input type="radio" name="persona" value="' . htmlspecialchars(json_encode($persona)) .  '">
                    </td>
                </tr>';
            };
            echo '<tr>
                    <td>
                        <input type="submit" value="eliminar">
                    </td>
                    <td>
                        <button type="submit" formaction= "/phpextraordinaria/practica1/editView"> editar </button>
                    </td>
                </tr>
            </form>';
            ?>
        </tr>
    </table>

    <ul>
        <li><a class="page-link" href="/phpextraordinaria/practica1/index.php?page=<?php echo $_GET['page'] - 1 ?>">Anterior</a></li>
        <?php for ($i = 1; $i <= $num_pags; $i++) : ?>
            <li class="page-item ">
                <a class="page-link" href="/phpextraordinaria/practica1/index.php?page=<?php echo $i ?>"><?php echo $i ?> </a>
            </li>
        <?php endfor; ?>
        <li><a class="page-link" href="/phpextraordinaria/practica1/index.php?page=<?php echo $_GET['page'] + 1 ?>">Siguiente</a></li>

    </ul>

</body>

</html>