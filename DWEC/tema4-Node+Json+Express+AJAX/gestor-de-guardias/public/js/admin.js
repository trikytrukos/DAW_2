document.addEventListener("DOMContentLoaded", function () {
  cargarProfesores().then(mostrarProfesores);
  prepararCeldasParaDrop();
  cargarProfesores().then(() => {
    cargarTodasLasGuardias();
  });
  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", cerrarSesion);
  }
});

function cerrarSesion() {
  window.location.href = "index.html";
}

// Evento para escuchar cuando se cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", cerrarSesion);
  }
  const botonEliminarTodas = document.getElementById("eliminar-todas-guardias");
  if (botonEliminarTodas) {
    botonEliminarTodas.addEventListener("click", eliminarTodasLasGuardias);
  }
});

function prepararCeldasParaDrop() {
  document.querySelectorAll("#calendar td").forEach((celda) => {
    celda.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    celda.addEventListener("drop", function (event) {
      event.preventDefault();
      const profesorId = event.dataTransfer.getData("text/plain");
      console.log(`Soltaste al ${profesorId} en la celda ${this.id}`);

      asignarGuardia(profesorId, this.id);
    });
  });
}

let asignacionesGuardias = {};

function asignarGuardia(profesorId, celdaId) {
  const diaCelda = celdaId.split("-")[0]; // Extrae el día de la celdaId, por ejemplo, "L" para "L-1".

  // Inicializa el conjunto para el día si aún no existe.
  if (!asignacionesGuardias[diaCelda]) {
      asignacionesGuardias[diaCelda] = new Set();
  }

  // Verificar si el profesor ya está asignado a alguna celda ese día.
  if (asignacionesGuardias[diaCelda].has(profesorId)) {
      alert(`El profesor ya está asignado a una celda el ${diaCelda}.`);
      return; // Detiene la función si el profesor ya tiene una asignación ese día.
  }

  // Solicita la descripción de la guardia.
  const descripcion = prompt("Introduce la descripción de la guardia:");

  if (descripcion === null) {
      console.log("Asignación de guardia cancelada por el usuario.");
      return; // Detiene la función si el usuario cancela el prompt.
  }

  // Prepara los datos para la solicitud.
  var data = JSON.stringify({
      profesorId: profesorId,
      celdaId: celdaId,
      descripcion: descripcion,
  });

  // Configuración de la solicitud AJAX.
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/guardias", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
          console.log("Guardia asignada con éxito:", JSON.parse(xhr.responseText));
          asignacionesGuardias[diaCelda].add(profesorId); // Añade el profesorId al Set del día correspondiente.
          actualizarCelda(celdaId, profesorId, descripcion); // Actualiza la UI con la nueva asignación.
      } else {
          alert("Error al asignar guardia: " + xhr.statusText);
      }
  };

  xhr.onerror = function() {
      alert("Error en la petición XHR");
  };

  xhr.send(data);
}


function actualizarCelda(celdaId, profesorId, descripcion) {
  const celda = document.getElementById(celdaId);
  if (celda) {
    celda.innerHTML = `${profesorId} <span class="descripcion-tooltip">${descripcion}</span>
      <div class="guardia-buttons">
        <button class="edit-btn" onclick="editarGuardia('${celdaId}')">Editar</button>
        <button class="delete-btn" onclick="eliminarGuardia('${celdaId}')">Eliminar</button>
      </div>`;
  }
}

function editarGuardia(celdaId) {
  const guardiaActual = asignacionesGuardias[celdaId];

  if (!guardiaActual) {
    alert("No hay guardia asignada en esta celda");
    return;
  }

  const profesorIdActual = guardiaActual.profesorId;
  const descripcionActual = guardiaActual.descripcion;

  const nuevoProfesorId =
    prompt(
      "Ingresa el ID del nuevo profesor para esta guardia:",
      profesorIdActual
    ) || profesorIdActual;

  const nuevaDescripcion = prompt(
    "Ingresa la nueva descripción para esta guardia:",
    descripcionActual
  );

  if (
    nuevoProfesorId !== profesorIdActual ||
    nuevaDescripcion !== descripcionActual
  ) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", `/guardias/${celdaId}`, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Guardia actualizada con éxito");
        actualizarCelda(celdaId, nuevoProfesorId, nuevaDescripcion);
        asignacionesGuardias[celdaId] = {
          profesorId: nuevoProfesorId,
          descripcion: nuevaDescripcion,
        };
      } else {
        console.error("Error al actualizar la guardia:", xhr.statusText);
      }
    };

    xhr.onerror = function () {
      console.error("Error en la petición XHR");
    };

    var data = JSON.stringify({
      profesorId: nuevoProfesorId,
      descripcion: nuevaDescripcion,
    });

    xhr.send(data);
  } else {
    alert("No se hicieron cambios en la guardia.");
  }
}

function eliminarGuardia(celdaId) {
  if (confirm("¿Estás seguro de que deseas eliminar esta guardia?")) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", `/guardias/${celdaId}`, true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Guardia eliminada con éxito");
        const celda = document.getElementById(celdaId);
        if (celda) {
          celda.innerHTML = "";
          delete asignacionesGuardias[celdaId];
        }
      } else {
        console.error("Error al eliminar la guardia:", xhr.statusText);
      }
    };

    xhr.onerror = function () {
      console.error("Error en la petición XHR");
    };

    xhr.send();
  }
}

function cargarTodasLasGuardias() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/guardias", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Respuesta recibida:", xhr.responseText);
      const data = JSON.parse(xhr.responseText);
      console.log("Datos parseados para mostrarGuardias:", data);
      mostrarGuardias(data);
    } else {
      console.error("Error al cargar las guardias:", xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Error en la petición XHR");
  };

  xhr.send();
}

let profesores = [];
async function cargarProfesores() {
  try {
    const respuesta = await fetch("/api/profesores");
    if (!respuesta.ok) throw new Error("No se pudieron cargar los profesores");
    profesores = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar profesores:", error);
  }
}

function eliminarTodasLasGuardias() {
  if (
    !confirm(
      "¿Estás seguro de que deseas eliminar TODAS las guardias? Esta acción no se puede deshacer."
    )
  ) {
    return; // El usuario canceló la acción
  }

  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", "/guardias", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Todas las guardias han sido eliminadas con éxito");

      generarCasillas();
    } else {
      console.error("No se pudieron eliminar las guardias");
    }
  };

  xhr.onerror = function () {
    console.error("Error en la red o el servidor");
  };

  xhr.send();
}

function mostrarProfesores() {
  const panel = document.getElementById("profesores-panel");
  panel.innerHTML = "";

  profesores.forEach((profesor) => {
    const profesorDiv = document.createElement("div");
    profesorDiv.textContent = profesor.username;
    profesorDiv.dataset.profesorid = profesor.profesorId;

    profesorDiv.setAttribute("draggable", true);
    profesorDiv.setAttribute(
      "ondragstart",
      "event.dataTransfer.setData('text/plain', event.target.dataset.profesorid)"
    );
    profesorDiv.classList.add("profesor");
    const disponibilidadDiv = document.createElement("span");
    disponibilidadDiv.textContent = ` ( ${profesor.disponibilidad.join(
      ", "
    )} )`;
    disponibilidadDiv.classList.add("disponibilidad");
    profesorDiv.appendChild(disponibilidadDiv);

    panel.appendChild(profesorDiv);
  });
}

asignacionesGuardias = {}; // Asegurarse de que se reinicia correctamente

function mostrarGuardias(guardias) {
  guardias.forEach(guardia => {
    const { profesorId, celdaId } = guardia;
    const dia = celdaId.split("-")[0];
    
    if (!asignacionesGuardias[dia]) {
      asignacionesGuardias[dia] = new Set();
    }
    
    asignacionesGuardias[dia].add(profesorId);
    actualizarCelda(celdaId, profesorId, guardia.descripcion);
  });
}

function mostrarResumenDisponibilidad() {
  cargarProfesores().then(() => {
    cargarTodasLasGuardias().then(() => {
      const resumen = profesores.map((profesor) => {
        const guardiasAsignadas = Object.entries(asignacionesGuardias)
          .filter(([celdaId, profesorId]) => profesorId === profesor.profesorId)
          .map(([celdaId]) => celdaId);
        return {
          nombre: profesor.username,
          guardias: guardiasAsignadas,
          disponibilidad: calcularDisponibilidad(guardiasAsignadas),
        };
      });

      mostrarResumenEnUI(resumen);
    });
  });
}

function calcularDisponibilidad(guardiasAsignadas) {
  const totalBloques = 5 * 4;
  const bloquesOcupados = new Set();

  guardiasAsignadas.forEach((celdaId) => {
    bloquesOcupados.add(celdaId);
  });

  const bloquesDisponibles = totalBloques - bloquesOcupados.size;

  return {
    totalBloques: totalBloques,
    bloquesOcupados: bloquesOcupados.size,
    bloquesDisponibles: bloquesDisponibles,
  };
}

function mostrarResumenEnUI(resumen) {
  const contenedorResumen = document.getElementById("resumen-disponibilidad");
  contenedorResumen.innerHTML = "";

  resumen.forEach((item) => {
    const elemento = document.createElement("div");
    elemento.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>Guardias asignadas: ${item.guardias.join(", ")}</p>
            <p>Disponibilidad: ${item.disponibilidad}</p>
        `;
    contenedorResumen.appendChild(elemento);
  });
}
