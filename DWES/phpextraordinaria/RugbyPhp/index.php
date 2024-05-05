<?php


require 'utils/validation.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rugby</title>
    <style>
        .error{
            color: red;
        }
        .puntuacion{
            width: 35px;
        }
    </style>
</head>
<body>
    <form action="index.php" method="post">
        <div>
            <label for="">Pais:</label>
            <input type="text" name="country" value="<?= showInput("country")?>">
            <?= showErrors("empty_country")?>
        </div>
        <div>
            <label for="">Resultado</label>
            <select name="result">
                <option value="Win" <?php showSelected("result", "Win");?>>Victoria</option>
                <option value="Loss" <?php showSelected("result", "Loss");?>>Derrota</option>
                <option value="Tie" <?php showSelected("result", "Tie");?>>Empate</option>
            </select>
        </div>
        <div>
            <label for="">Marcador:</label>
            <input type="number" class="puntuacion" name="score1" value="<?= showInput(SPAIN)?>">
            <span> - </span>
            <input type="number" class="puntuacion" name="score2" value="<?= showInput(OPPONENT)?>">
            <?php showErrors("score")?>
        </div>
        
        <button type="submit" name="butt1">Send</button>
    </form>

    <a href=""></a>

    <?php include_once 'exit.php'; ?>
    
</body>
</html>