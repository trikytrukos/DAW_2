document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username, password);
  const errorMessage = document.getElementById("error-message");

  var xhr = new XMLHttpRequest();
  xhr.open("post", "/login", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      if (data.success) {
        localStorage.setItem("username", data.username);
        window.location.href = "/index.html";
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
  console.log(data);
  xhr.send(data);
});
