let nombre;
let edad;
let ciudad;


function Persona(nombre, edad, ciudad){
    this.nombre=nombre;
    this.edad=edad;
    this.ciudad=ciudad;
}
let persona = new Persona(nombre, edad, ciudad);
function presentar() {
    persona.nombre = prompt("Ingresa tu nombre: ");
    persona.edad = prompt("Ingresa tu edad: ");
    persona.ciudad = prompt("Ingresa tu ciudad: ");
    alert ('Hola soy ' + persona.nombre + ' tengo ' + persona.edad + ' y vivo en ' + persona.ciudad);
}

