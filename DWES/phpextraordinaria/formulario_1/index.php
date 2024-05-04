<?php

$array_errors = array();

$allergies_array = array(  "gluten", "crustaceos", "huevos", "pescado", "cacahuetes", "soja", "lacteos", "frutos de cascara", "apio", "mostaza", "sesamo", "sulfitos", "altramuces", "moluscos");

function isValid($data){
    return (isset($data)  && $data != "") ? true : false;

}

    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['boton1'])){
        if(!isValid($_POST['name'])){
            $array_errors['NameError'] = "El nombre es obligatoria";
        }
        if(!isValid($_POST['address'])){
            $array_errors['AdressError'] = "La direccion es obligatorio";
        }
        if(!isValid($_POST['dishes'])){
            $array_errors['dishesErrorEmpty'] = "el numero de platos no puede estar vacio";
        } else if($_POST['dishes'] < 3){
            $array_errors['dishesErrorFew'] = "El numero de platos no puede ser menor a 3";
        }

        if(empty ($array_errors)){
            $name = urlencode($_POST['name']);
            $address = urlencode($_POST['address']);
            $dishes = urlencode($_POST['dishes']);
            $vegetariano = urlencode($_POST['vegetariano']);
            if(!isset($_POST['alergias'])){
                $alergias = urlencode(implode(",", $_POST['alergias']));
            }
            
            header("Location: ./exit.php?name=$name&address=$address&dishes=$dishes&vegetariano=$vegetariano&alergias=$alergias");


        } 
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .error{
            color: red;
        }
    </style>
</head>
<body>
    <h1>Formulario</h1>
    
    <?php if(count($array_errors) > 0) : ?>
        <?php foreach($array_errors as $error): ?>
            <div class='error'><?= $error ?></div>
        <?php endforeach; ?>
    <?php endif;
    ?>
    <form action="index.php" method="post">
        <div>
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name" placeholder="nombre" require value="<?= isValid($_POST["name"]) ? $_POST["name"] : "";  ?>">
        </div>
        <div>
            <label for="address">Direccion</label>
            <input type="text" name="address" id="address" placeholder="direccon" require value="<?= isValid($_POST["address"]) ? $_POST["address"] : "";  ?>">
        </div>
        <div>
            <label for="dishes">numero de platos</label>
            <input type="number" name="dishes" id="dishes" placeholder="numero de platos" require value="<?= isValid($_POST["dishes"]) ? $_POST["dishes"] : "";  ?>">
        </div>
        <div>
            <label for="vegetariano">vegetariano?</label>
            <select name="vegetariano" id="vegetariano">
                <option value="si" <?= isValid($_POST["vegetariano"]) && $_POST["vegetariano"] === "si" ? "selected" : ""; ?> >si</option>
                <option value="no" <?= isValid($_POST["vegetariano"]) && $_POST["vegetariano"] === "no" ? "selected" : ""; ?>>no</option>
            </select>
        </div>
        <div>
            <label for="alergias">Alergias</label>
            <p>alergias:
            </p>
            <ul>
                <?php foreach ($allergies_array as $allergy) : ?>
                    <li>
                        <label for="<?= $allergy ?>"><?= $allergy; ?></label>
                        <input type="checkbox" name="alergias[]" id="<?= $allergy ?>" value="<?= $allergy ?>" >
                        
                    </li>
                <?php endforeach; ?>
            </ul>
            
        </div>
        <button type="submit" name="boton1">Enviar</button>
    </form>
</body>
</html>