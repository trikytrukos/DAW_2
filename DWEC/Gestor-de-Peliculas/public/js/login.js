const botonLogin = document.getElementById('login-button');
botonLogin.addEventListener('click', function (event) {
    
    //* se usa el preventDefault para evitar que el formulario se envie por defecto
    event.preventDefault();

    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if (username !== "" && password !== "") {
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {
                data.pula
                if (data.success) {
                    localStorage.setItem('userID', data.userID);
                    window.location.href = '/html/movies.html';
                }
                else {
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});