<?php
/*funcion de concatenacion de variables con una etiqueta html*/
function magia($etiqueta,...$variables){
    foreach ($variables as $variable){
       echo "<".$etiqueta."> ".$variable." </".$etiqueta.">";
    }
}
magia('li', "esto","y","esto","y esto tambien",12);

/*funcion de concatenacion de palabras en una unica frase*/
function concatenarPalabras(...$palabras){
    $frase="";
    foreach ($palabras as $palabra){
        $frase .= $palabra." ";
    }
    return $frase;
}
echo concatenarPalabras("hola","mundo","!");
echo "<br>";
/*funcion concatenaCon */

function concatenarCon($variable,...$palabras){
    foreach ($palabras as $palabra){
        $variable .= $palabra;
    }
    return $variable;
}
echo concatenarCon("pula","mea", 5);
echo "<br>";
/*Funciones anonimas y callbacks*/

$multiplicacion = function ($num1, $num2){
 return $num1*$num2;
};
echo $multiplicacion(3,4);

echo "<br>";
function aplicarOperacion($operador, $num1, $num2){
  $solucion="";
  switch ($operador){
    case "+":
      $solucion=$num1+$num2;
      break;
    case "-":
      $solucion=$num1-$num2;
      break;
    case "*":
      $solucion=$num1*$num2;
      break;
    case "/":
      $solucion=$num1/$num2;
      break;
  }
  return $solucion;
}

echo aplicarOperacion("+",2,2)."<br>";
echo aplicarOperacion("-",2,2)."<br>";
echo aplicarOperacion("*",2,2)."<br>";
echo aplicarOperacion("/",2,2)."<br>";

echo "<br>";
/*Modificar Variables*/

function revertirCadena($cadena){
  $cadenaInversa = strrev($cadena);
  return $cadenaInversa;
}
echo revertirCadena("hola Mundo!  Pula Mea Frate");
echo '<br>';


function sumaArray($acumulador, $arrayDeEnteros) {

  foreach ($arrayDeEnteros as $entero) {
    $acumulador += $entero;
  }

  return $acumulador;
}

$acumulador = 0;
$arrayDeEnteros = [1, 2, 3, 4, 5];
$acumulador = sumaArray($acumulador, $arrayDeEnteros);

echo '<pre>';
print_r($arrayDeEnteros);
echo '</pre>';

echo '<br>'."El nuevo valor del acumulador es: $acumulador";

function sumaArrayVariable($acumulador, ...$arrayDeEnteros) {

  foreach ($arrayDeEnteros as $entero) {
    $acumulador += $entero;
  }

  return $acumulador;
}

$acumulador = 0;
echo '<br>'."El nuevo valor del acumulador es: ".sumaArrayVariable($acumulador, 1,3,6,2,7,3);


?>