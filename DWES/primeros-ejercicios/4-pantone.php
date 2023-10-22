<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tonos de Verde</title>
</head>
<body>
<h1>Tonos de Verde</h1>
<div style="display: flex; flex-wrap: wrap;">
    <div style="display: flex; flex-wrap: wrap;">
        <?php

        $verde_base = "#00FF00";


        for ($i = 0; $i < 10; $i++) {

            $tono_verde = sprintf("#%02X%02X%02X", hexdec(substr($verde_base, 1, 2)), hexdec(substr($verde_base, 3, 2)) - $i * 10, hexdec(substr($verde_base, 5, 2)));
            echo '<div style="background-color:' . $tono_verde . '; width: 100px; height: 100px;">' . $tono_verde . '</div>';
        }
        ?>
    </div>
</div>
</body>
</html>
