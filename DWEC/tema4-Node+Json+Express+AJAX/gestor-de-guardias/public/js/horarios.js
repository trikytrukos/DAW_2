function generarCasillas() {
  const tabla = document
    .getElementById("calendar")
    .getElementsByTagName("tbody")[0];
  let horaInicio = new Date();
  horaInicio.setHours(16, 0); 
  const duracionClase = 55; 
  const descansoInicio = new Date(horaInicio);
  descansoInicio.setHours(18, 45); 
  const descansoFin = new Date(descansoInicio);
  descansoFin.setMinutes(descansoInicio.getMinutes() + 25); 
  let bloque = 1;
  let horaActual = new Date(horaInicio);

  const tablaBody = document.getElementById("calendar").getElementsByTagName("tbody")[0];
  tablaBody.innerHTML = ''; 
  
  while (
    horaActual.getHours() < 21 ||
    (horaActual.getHours() === 21 && horaActual.getMinutes() < 55)
  ) {
    if (horaActual >= descansoInicio && horaActual < descansoFin) {
      horaActual = new Date(descansoFin);
    }

    let fila = tabla.insertRow();
    let celdaHora = fila.insertCell();
    celdaHora.textContent = `${formatoHora(horaActual)} - ${formatoHora(
      new Date(horaActual.getTime() + duracionClase * 60000)
    )}`;
    let letrasDias = ["L", "M", "X", "J", "V"];

    for (let dia = 0; dia < letrasDias.length; dia++) {
      let celda = fila.insertCell();
      celda.id = `${letrasDias[dia]}-${bloque}`;
    }

    horaActual = new Date(horaActual.getTime() + duracionClase * 60000);
    if (!(horaActual > descansoInicio && horaActual < descansoFin)) {
      bloque++;
    }
  }
}

function formatoHora(fecha) {
  return fecha.toTimeString().substring(0, 5);
}

document.addEventListener("DOMContentLoaded", function () {
  generarCasillas();
});
