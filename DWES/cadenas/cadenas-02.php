<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Cadenas 2</title>
</head>
<body>
<form action="cadenas-02-php.php" method="get" onsubmit="return redirigir();">
  <label for="nombre">nombre completo:</label>
  <input type="text" id="nombre" name="nombre" required>
  <br>
  <label for="empresa">Empresa:</label>
  <input type="text" id="empresa" name="empresa" required>
  <br>
  <label for="fecha">Fecha:</label>
  <input type="text" id="fecha" name="fecha" required>
  <br>
  <input type="submit" value="Enviar">
</form>
<script>
    function redirigir() {
        setTimeout(function() {
            window.location.href = "cadenas-02-php.php";
        }, 1000); // Redirige después de 1 segundo
        return true;
    }
</script>
</body>
</html>
