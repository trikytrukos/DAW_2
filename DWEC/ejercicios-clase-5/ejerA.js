    let contenedor = document.getElementById('contenedor')
    contenedor.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            alert('Hiciste clic en el botón con ID: ' + event.target.id);
        }
    });


