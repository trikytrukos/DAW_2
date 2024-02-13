document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/login", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      if (data.success) {
        localStorage.setItem("rolUsuario", data.role);
        if (data.role === "profesor") {
          localStorage.setItem("profesorId", data.profesorId);
        }

        if (data.role === "admin") {
          window.location.href = "/admin.html";
        } else if (data.role === "profesor") {
          window.location.href = "/profesor.html";
        }
      } else {
        errorMessage.textContent = data.message;
      }
    } else {
      const data = JSON.parse(xhr.responseText);
      errorMessage.textContent =
        data.message || "Ha ocurrido un error. Por favor, inténtalo de nuevo.";
    }
  };

  xhr.onerror = function () {
    errorMessage.textContent =
      "Error de conexión. Por favor, verifica tu conexión a internet.";
  };

  var data = JSON.stringify({ username, password });
  xhr.send(data);
});

function manejarRespuestaLogin(respuesta) {
  localStorage.setItem("rolUsuario", respuesta.role);
  localStorage.setItem("profesorId", data.profesorId);

  if (respuesta.rol === "admin") {
    window.location.href = "/admin.html";
  } else if (respuesta.rol === "profesor") {
    window.location.href = "/profesor.html";
  }
}
