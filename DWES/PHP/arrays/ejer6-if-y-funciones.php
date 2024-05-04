<?php
include 'ejer6-php.php';
/**
 * @var array $biblioteca;
 * @var null $libroBuscado
 */
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
    <style>
        .highlight {
            background-color: yellow;
        }
        .negativo{
            color: #d54343;
        }
    </style>
</head>
<body>
<h2>Buscador de Libros</h2>
<form method="post">
    <label for="titulo">Buscar libro:</label>
    <input type="text" name="titulo" id="titulo">
    <input type="submit" value="Buscar">
</form>
<br>
<table style="border: 2px solid black">
    <tr>
        <th colspan="4" > Libros </th>
    </tr>
    <tr>
        <th>Titulo</th>
        <th>Autor</th>
        <th>cantidad</th>
        </tr>
    <?php foreach ($biblioteca["libros"] as $libro) {
      echo '<tr';
      if ($libroBuscado !== null && $libro['titulo'] === $libroBuscado['titulo']) {
        echo ' class="highlight"';
      }
      echo '>';
      echo '<td>' . $libro["titulo"] . '</td>';
      echo '<td>' . $libro["autor"] . '</td>';
      echo '<td>' . $libro["cantidad"] . '</td>';
      echo '</tr>';
    }
    ?>
</table>

<?php if ($libroBuscado !== null) { ?>
    <p>
      <?php echo '<p>'."El libro está disponible".'</p>'; ?>
    </p>
<?php } else { ?>
    <p>
      <?php echo '<p>'."El libro ".'<b class="negativo">'."NO".'</b>'." está disponible".'</p>'; ?>
    </p>
<?php } ?>

</body>
</html>
