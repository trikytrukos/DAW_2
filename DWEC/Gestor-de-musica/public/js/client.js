document.addEventListener('DOMContentLoaded', () => {
    loadsongs();
});


loadsongs = () => {

    fetch('/songs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        data.users.forEach(user => {

            user.songs.forEach(song => {
                addSongToDom(song);
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    })
}

function addSongToDom(song){
    const songContainer = document.createElement('div');
    songContainer.id = song.title;
    songContainer.classList.add('song');
    songContainer.innerHTML = `<span>cancion: ${song.title}</span><br>
    <span>artista: ${song.artist}</span><br>
    <button id = 'delete-button-${song.title}'>Eliminar</button>
    <button id = 'update-button-${song.title}'>Editar</button>`;

    const categoryElement = document.getElementById(`${song.category}-songs`);
    if (categoryElement) {
        categoryElement.appendChild(songContainer);
    } else {
        console.error(`Elemento no encontrado para la categoría: ${song.category}-songs`);
    }

}