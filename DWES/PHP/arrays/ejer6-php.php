<?php
$biblioteca = [
  "nombre" => "Biblioteca Central",
  "ubicacion" => "Calle Principal",
  "libros" => [
    ["titulo" => "La Odisea", "autor" => "Homero", "cantidad" => 5],
    ["titulo" => "Cien años de soledad", "autor" => "Gabriel García Márquez", "cantidad" => 8],

  ],
  "personal" => [
    ["nombre" => "María", "puesto" => "Bibliotecaria"],
    ["nombre" => "Luis", "puesto" => "Asistente"],
  ],
];

$libros_nuevos = [
  ["titulo" => "Don Quijote de la Mancha", "autor" => "Miguel de Cervantes", "cantidad" => 7],
  ["titulo" => "1984", "autor" => "George Orwell", "cantidad" => 10],
  ["titulo" => "El Gran Gatsby", "autor" => "F. Scott Fitzgerald", "cantidad" => 6],
  ["titulo" => "Matar un ruiseñor", "autor" => "Harper Lee", "cantidad" => 4],
  ["titulo" => "Ulises", "autor" => "James Joyce", "cantidad" => 3],
  ["titulo" => "Los juegos del hambre", "autor" => "Suzanne Collins", "cantidad" => 9],
  ["titulo" => "El código Da Vinci", "autor" => "Dan Brown", "cantidad" => 12],
  ["titulo" => "Crimen y castigo", "autor" => "Fyodor Dostoevsky", "cantidad" => 6]
];

$biblioteca["libros"] = array_merge($biblioteca["libros"], $libros_nuevos);


function buscarLibro($titulo, $biblioteca) {
  $index = array_search($titulo, array_column($biblioteca['libros'], 'titulo'));
  if ($index !== false) {
    return $biblioteca['libros'][$index];
  }
  return null;
}

$libroBuscado = null;
if (isset($_POST['titulo'])) {
  $tituloBuscado = $_POST['titulo'];
  $libroBuscado = buscarLibro($tituloBuscado, $biblioteca);
}
?>
