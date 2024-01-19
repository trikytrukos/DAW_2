document.addEventListener('DOMContentLoaded', function() {
    var caja = document.getElementById('caja');
    var nuevoExpositor = document.getElementById('nuevoExpositor');
    
    const skins = {
        azul: ['imagenes/azules/Captura.PNG', 'imagenes/azules/MAC10.PNG', 'imagenes/azules/MAG7.PNG', 'imagenes/azules/mp5.PNG', 'imagenes/azules/p2000.PNG', 'imagenes/azules/recortada.PNG', 'imagenes/azules/scar.PNG'],
        morado: ['imagenes/morados/g3sg.PNG', 'imagenes/morados/m4a1.PNG', 'imagenes/morados/ppbizon.PNG', 'imagenes/morados/usp.PNG', 'imagenes/morados/xm1014.PNG'],
        rosa: ['imagenes/rosas/beretas.PNG', 'imagenes/rosas/famas.PNG', 'imagenes/rosas/mp7.PNG'],
        roja: ['imagenes/rojas/ak.PNG', 'imagenes/rojas/mp9.PNG'],
        dorado: ['imagenes/dorado.PNG']
    };
    
    document.getElementById('botonAbrir').addEventListener('click', function() {
        document.getElementById('expositor').classList.add('ocultar');
        document.getElementById('botonAbrir').classList.add('ocultar');
        
        caja.classList.add('rotarCaja');
        
        caja.addEventListener('animationend', function handler() {
            mostrarNuevoExpositor();
            
            caja.style.transform = 'rotateX(-5deg) rotateY(75deg) rotateZ(0)';
            caja.removeEventListener('animationend', handler);
        });
        
        setTimeout(() => {
            iniciarAnimacionRuleta();
        }, 1000);
    });
    
    
    
    function agregarImagenesAlExpositor() {
        let expositor = document.getElementById('expositor');
        let todasLasSkins = Object.values(skins).flat();
        todasLasSkins.forEach(src => {
            let img = document.createElement('img');
            img.src = src;
            img.classList.add('expositorImagen');
            expositor.appendChild(img);
        });
    }
    
    agregarImagenesAlExpositor();
    
    function seleccionarSkinAleatoria() {
        let rand = Math.random() * 100;
        if (rand < 70) return seleccionarAleatoria(skins.azul);
        else if (rand < 40) return seleccionarAleatoria(skins.morado);
        else if (rand < 15) return seleccionarAleatoria(skins.rosa);
        else if (rand < 2) return seleccionarAleatoria(skins.roja);
        else if (rand < 1) return seleccionarAleatoria(skins.dorado);
    }

    function seleccionarAleatoria(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    function generarListaImagenes() {
        let listaImagenes = [];
        for (let j = 0; j < 5; j++) {
            for (let i = 0; i < 20; i++) {
                listaImagenes.push(seleccionarSkinAleatoria());
            }
        }
        return listaImagenes;
    }
    
    function iniciarAnimacionRuleta() {
        let imagenes = generarListaImagenes();
        let contenedorImagenes = document.createElement('div');
        contenedorImagenes.classList.add('contenedorImagenes');
        
        imagenes.forEach(src => {
            let img = document.createElement('img');
            img.src = src;
            img.classList.add('imagenAnimada');
            contenedorImagenes.appendChild(img);
        });
        
        nuevoExpositor.style.display = 'flex';
        nuevoExpositor.appendChild(contenedorImagenes);
        
    }
    
    function mostrarNuevoExpositor() {
        var nuevoExpositor = document.getElementById('nuevoExpositor');
        
        nuevoExpositor.style.display = 'flex';
    }
    
    
    
});