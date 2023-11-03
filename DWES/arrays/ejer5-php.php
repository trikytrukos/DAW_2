<?php

$carrito = [
  ["producto" => "Camiseta", "precio" => 19.99, "cantidad" => 2],
  ["producto" => "Zapatillas", "precio" => 49.99, "cantidad" => 1],
  ["producto" => "Pantalones", "precio" => 29.99, "cantidad" => 3],
];
$cantidades =0;
$total1=0;
$totalTotal=0;
foreach ($carrito as $item) {
  $subTotal = $item["precio"] * $item["cantidad"];
  echo '<pre>';
  echo $subTotal;
  echo '</pre>';
}

echo '<table style="border: 2px solid black">';
echo '<tr>';
echo '<td>'."Producto".'</td>';
echo '<td>'."Cantidad".'</td>';
echo '<td>'."Precio".'</td>';
echo '<td>'."Total".'</td>';
echo '</tr>';
foreach ($carrito as $item){
  $cantidad = $item["cantidad"];
  $precios = $item["precio"];
  $subTotal = $item["precio"]*$item["cantidad"];
  $totalTotal+= $subTotal;
  $total1 += $precios;
  $cantidades += $cantidad;
  echo '<tr>';
  echo '<td>'.$item["producto"].'</td>';
  echo '<td>'.$item["cantidad"].'</td>';
  echo '<td>'.$item["precio"].'</td>';
  echo '<td>'.$subTotal.'</td>';
  echo '</tr>';
}
echo '<tr>';
echo '<td>'."Total".'</td>';
echo '<td>'.$cantidades.'</td>';
echo '<td>'.$total1.'</td>';
echo '<td>'.$totalTotal.'</td>';
echo '</tr>';
echo '</table>';
?>