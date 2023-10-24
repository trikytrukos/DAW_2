<?php
$frutas = array("Manzana", "Plátano", "Naranja", "Uva");
$precios = array(1.2, 0.8, 1.0, 2.5);

for ($i = 0; $i < count($frutas); $i++) {
    echo $frutas[$i] . ", ";
}
echo '<ul>';
for ($i = 0; $i < count($frutas); $i++) {
    echo '<li>' . $frutas[$i] . " = " . $precios[$i] . "€" . '</li>';
}
echo '</ul>';
echo '<pre>';
print_r($frutas);
echo '</pre>';
?>