<?php

$carrito = [
  ["producto" => "Camiseta", "precio" => 19.99, "cantidad" => 2],
  ["producto" => "Zapatillas", "precio" => 49.99, "cantidad" => 1],
  ["producto" => "Pantalones", "precio" => 29.99, "cantidad" => 3],
];

$precios = array_map(function ($precios) {
  return $precios["precio"];
}, $carrito);

$total = array_sum($precios);

echo'<pre>';
print_r($precios);
echo "total = ".$total;
echo '</pre>';
?>