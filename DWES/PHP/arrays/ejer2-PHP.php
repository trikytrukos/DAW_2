<?php
$alumnos = array(
    array("nombre" => "Juan", "edad" => 20, "curso" => "Matemáticas"),
    array("nombre" => "Ana", "edad" => 19, "curso" => "Historia"),
    array("nombre" => "Carlos", "edad" => 21, "curso" => "Inglés"),
);
$contador = count($alumnos);
while ($contador > 0) {
    if ($contador == count($alumnos)) {
        $menor = $alumnos[$contador - 1]['edad'];
        $nombre = $alumnos[$contador - 1]['nombre'];
    } else {
        if ($menor > $alumnos[$contador - 1]['edad']) {
            $menor = $alumnos[$contador - 1]['edad'];
            $nombre = $alumnos[$contador - 1]['nombre'];
        }
    }
    $contador--;
}
echo '<p>' . "El alumno de menor edad es: " . $nombre . " con " . $menor . " años" . '</p>';

$alumnoMenorEdad = array_reduce($alumnos, function ($carry, $alumno) {
    if ($carry === null || $alumno['edad'] < $carry['edad']) {
        return $alumno;
    }
    return $carry;
}, null);

if ($alumnoMenorEdad !== null) {
    echo '<p>'."El alumno de menor edad es: " . $alumnoMenorEdad['nombre'] . " con " . $alumnoMenorEdad['edad'] . " años.".'</p>';
} else {
    echo '<p>'."No se encontró ningún alumno en el array o no se encontró un alumno de menor edad.".'</p>';
}


usort($alumnos, function($a, $b) {
    return $a['edad'] - $b['edad'];
});

echo '<table border="1">';
echo '<tr><th>Nombre</th><th>Edad</th><th>Curso</th></tr>';

foreach ($alumnos as $alumno) {
    echo '<tr>';
    echo '<td>' . $alumno['nombre'] . '</td>';
    echo '<td>' . $alumno['edad'] . '</td>';
    echo '<td>' . $alumno['curso'] . '</td>';
    echo '</tr>';
}

echo '</table>';
?>