<?php

$mysqli = new mysqli("localhost", "root", "root", "prueba", 3306);

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST' && $_SERVER['REQUEST_URI'] === '/phpextraordinaria/practica1/insertar') {

    $data = $_POST;

    if (isset($data['name']) && isset($data['surname'])) {
        header('HTTP/1.1 200 OK');
        header('Content-Type: application/json');
        echo json_encode([
            "name" => $data['name'],
            "surname" => $data['surname']
        ]);

        insert($data, $mysqli);

        header("Location: index.php");
        exit();
    } else {
        echo json_encode([
            'error' => 'name and surname are required'
        ]);
    }
} else if ($method === 'POST' && $_SERVER['REQUEST_URI'] === '/phpextraordinaria/practica1/eliminar') {

    $data = $_POST;

    if (isset($data)) {
        header('HTTP/1.1 200 OK');
        header('Content-Type: application/json');
        echo json_encode([
            "checklist" => $data['checklist']
        ]);

        $borrar = implode(",", $data['checklist']);

        delete($borrar, $mysqli);

        header("Location: index.php");
        exit();
    }
} else if ($method === 'POST' && $_SERVER['REQUEST_URI'] === '/phpextraordinaria/practica1/update') {

    $data = $_POST;

    if (isset($data['name']) && isset($data['surname'])) {
        header('HTTP/1.1 200 OK');
        header('Content-Type: application/json');
        echo json_encode([
            "name" => $data['name'],
            "surname" => $data['surname']
        ]);

        update($data, $mysqli);

        header("Location: index.php");
        exit();
    } else {
        echo json_encode([
            'error' => 'name and surname are required'
        ]);
    }
}

function insert($data, $mysqli)
{

    $name = $data['name'];
    $surname = $data['surname'];

    $query = "INSERT INTO persona (nombre, apellido) VALUES ('$name', '$surname')";

    if ($mysqli->query($query) === TRUE) {
        echo "datos insertados correctamente";
    } else {
        echo "Error: " . $query . "<br>" . $mysqli->error;
    }

    $mysqli->close();
}

function selectAll($mysqli)
{

    $query = "SELECT * FROM persona";

    $personas = $mysqli->query($query);

    return $personas;
}

function delete($data, $mysqli)
{

    $query = "DELETE FROM persona WHERE id IN ($data)";

    if ($mysqli->query($query) === TRUE) {
        echo "datos eliminados correctamente";
    } else {
        echo "Error: " . $query . "<br>" . $mysqli->error;
    }


    $mysqli->close();
}

function update($data, $mysqli)
{

    $name = $data['name'];
    $surname = $data['surname'];
    $id = $data['id'];

    $query = "UPDATE persona SET nombre = '$name', apellido = '$surname' WHERE id = $id";

    if ($mysqli->query($query) === TRUE) {
        echo "datos actualizados correctamente";
    } else {
        echo "Error: " . $query . "<br>" . $mysqli->error;
    }

    $mysqli->close();
}
