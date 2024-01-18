document.addEventListener('DOMContentLoaded', function() {
    var caja = document.getElementById('caja');
    var nuevoExpositor = document.getElementById('nuevoExpositor');
    var juego = document.getElementById('juego');
    
    const skins = {
        comun: ['skin1.jpg', 'skin2.jpg'],
        rara: ['skinRara1.jpg', 'skinRara2.jpg'],
        epica: ['skinEpica1.jpg'],
        legendaria: ['skinLegendaria1.jpg']
    };
    
    document.getElementById('botonAbrir').addEventListener('click', function() {
        document.getElementById('expositor').classList.add('ocultar');
        document.getElementById('botonAbrir').classList.add('ocultar');
        
        caja.classList.add('cajaCentrada');
        
        caja.addEventListener('animationend', function() {
            mostrarNuevoExpositorYOscurecerFondo();
        });
        
        setTimeout(() => {
            iniciarAnimacionRuleta();
        }, 1000); // Ajusta este tiempo según sea necesario
    });
    
    function seleccionarSkinAleatoria() {
        let rand = Math.random() * 100;
        if (rand < 70) return seleccionarAleatoria(skins.comun);
        else if (rand < 90) return seleccionarAleatoria(skins.rara);
        else if (rand < 99) return seleccionarAleatoria(skins.epica);
        else return seleccionarAleatoria(skins.legendaria);
    }

    function seleccionarAleatoria(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generarListaImagenes() {
        let listaImagenes = [];
        for (let i = 0; i < 20; i++) { // Ajustar según la longitud deseada
            listaImagenes.push(seleccionarSkinAleatoria());
        }
        return listaImagenes;
    }
    
    function iniciarAnimacionRuleta() {
        let imagenes = generarListaImagenes(); // Asegúrate de tener esta función definida
        // Agrega las imágenes al contenedor en nuevoExpositor y aplica la clase para animar
    }
    
    function mostrarNuevoExpositorYOscurecerFondo() {
        var nuevoExpositor = document.getElementById('nuevoExpositor');
        
        nuevoExpositor.style.display = 'flex'; // Mostrar el nuevo expositor
    }
    
    caja.addEventListener('animationend', function handler() {
        caja.style.transform = 'rotateX(-5deg) rotateY(75deg) rotateZ(0)';
        caja.removeEventListener('animationend', handler); // Remueve el listener
        console.log("Animación terminada");
    });
    
});

