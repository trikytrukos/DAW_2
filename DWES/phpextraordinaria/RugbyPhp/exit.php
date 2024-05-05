<?php
    //TODO: MOdificar para evitar demasiadas peticiones a la db
    require 'utils/db.php';

    $page = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;

    $select = $db -> prepare('SELECT * FROM matches LIMIT :offset, :limite');

    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['button1'])){
        $order = $_POST['countries'];
        $result = $_POST['results'];

        switch($result){
            case "All":
                switch($order){
                    case "default":
                        $select = $db -> prepare('SELECT * FROM matches LIMIT :offset, :limite');
                        break;
                    case "A_Z":
                        $select = $db -> prepare('SELECT * FROM matches ORDER BY country ASC LIMIT :offset, :limite');
                        break;
                    case "Z_A":
                        $select = $db -> prepare('SELECT * FROM matches ORDER BY country DESC LIMIT :offset, :limite');
                        break;
                } 
                break;
            case "Wins":
                switch($order){
                    case "default":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Win" LIMIT :offset, :limite');
                        break;
                    case "A_Z":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Win" ORDER BY country ASC LIMIT :offset, :limite');
                        break;
                    case "Z_A":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Win" ORDER BY country DESC LIMIT :offset, :limite');
                        break;
                }
                
                break;
            case "Loses":
                switch($order){
                    case "default":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Loss" LIMIT :offset, :limite');
                        break;
                    case "A_Z":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Loss" ORDER BY country ASC LIMIT :offset, :limite');
                        break;
                    case "Z_A":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Loss" ORDER BY country DESC LIMIT :offset, :limite');
                        break;
                }
            
                break;
            case "Ties":
                switch($order){
                    case "default":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Tie" LIMIT :offset, :limite');
                        break;
                    case "A_Z":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Tie" ORDER BY country ASC LIMIT :offset, :limite');
                        break;
                    case "Z_A":
                        $select = $db -> prepare('SELECT * FROM matches WHERE result = "Tie" ORDER BY country DESC LIMIT :offset, :limite');
                        break;
                }
                $select = $db -> prepare('SELECT * FROM matches WHERE result = "Tie" LIMIT :offset, :limite');
                break;
        }
    }
    
    

    $select -> bindValue(':limite', ROWS_PER_PAGE, PDO::PARAM_INT);
    $select -> bindValue(':offset', ROWS_PER_PAGE * ($page - 1), PDO::PARAM_INT);

    $select -> execute();

    $rows = $select -> fetchAll(PDO::FETCH_ASSOC);
    

    $count = $db ->  query("SELECT COUNT(*) FROM matches");
    $total_actions = $count -> fetch();

    $num_paginas = ceil($total_actions[0] / ROWS_PER_PAGE);

    
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label for="">Filtrar por:</label>
        <select name="results" id="">
            <option value="All" <?php showSelected("results", "All")?>>Todos</option>
            <option value="Wins" <?php showSelected("results", "Wins")?>>Victorias</option>
            <option value="Loses" <?php showSelected("results", "Loses")?>>Derrotas</option>
            <option value="Ties" <?php showSelected("results", "Ties")?>>Empates</option>
        </select>
        <select name="countries" id="">
            <option value="default">default</option>
            <option value="A_Z" <?php showSelected("countries", "A_Z")?> >A-Z</option>
            <option value="Z_A" <?php showSelected("countries", "Z_A")?> >Z-A</option>
        </select>
        
        <button type="submit" name="button1">Enviar</button>
        
    </form>

    <table>
        <tr>
            <th>id</th>
            <th>country</th>
            <th>result</th>
            <th>score</th>
        </tr>

        <?php foreach ($rows as $row) : ?>
            <tr>
                <td><?=$row['id']; ?></td>
                <td><?=$row['country']; ?></td>
                <td><?=$row['result']; ?></td>
                <td><?=$row['score']; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
    
    <?php showPages($page, $num_paginas); ?>
    
</body>
</html>