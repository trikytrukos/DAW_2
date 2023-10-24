<?php
$eventos = array(
    array("nombre" => "Evento 1", "fecha" => "2023-10-20"),
    array("nombre" => "Evento 2", "fecha" => "2023-11-15"),
    array("nombre" => "Evento 3", "fecha" => "2023-09-05"),
    array("nombre" => "Evento 4", "fecha" => "2023-12-10"),
);

echo '<table border="1">';
echo '<tr><th>Evento</th><th>Fecha</th></tr>';

$hoy = date('Y-m-d'); // Obtener la fecha actual

foreach ($eventos as $evento) {
    echo '<tr>';
    echo '<td>' . $evento['nombre'] . '</td>';
    echo '<td>';

    // Comparar la fecha del evento con la fecha actual
    if ($evento['fecha'] < $hoy) {
        // Evento pasado: texto en cursiva y color rojo
        echo '<i style="color: red;">' . $evento['fecha'] . '</i>';
    } else {
        // Evento futuro: texto en negrita y color verde
        echo '<b style="color: green;">' . $evento['fecha'] . '</b>';
    }

    echo '</td>';
    echo '</tr>';
}

echo '</table>';
?>