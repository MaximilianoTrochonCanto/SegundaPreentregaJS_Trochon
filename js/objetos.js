

class Jugador{
    constructor(n,p,i){
        this.nombre = n,
        this.procedencia = p,
        this.intentos = i
        
    }
}

const agregarNombreYpaisJugador = function () {
    jugadorNuevo = new Jugador('Maxi','Coquimbo',0);
    // jugadorNuevo.nombre = prompt('Como te llamas?');
    // jugadorNuevo.paisJugador = prompt('De donde eres?');
    // jugadorNuevo.intentos = 0;
}

agregarNombreYpaisJugador();

let jugadoresPrecargados = [
    {
        nombre:'xxXJuancit00Xxx',
        procedencia:'Nirvana',
        intentos: (Math.random() * (5-3) + 3).toFixed(0)        
    },
    {
        nombre:'Yeluzzzz',
        procedencia:'Cordoba',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'MatiCNdeF',
        procedencia:'Barros Blancos',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'Miliiii<3',
        procedencia:'BarbieWorld',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'Ruben Silva',
        procedencia:'Buenos Aires, Argentina.',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'L0rdV0lde3m0rt',
        procedencia:'Slytheryn',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'RauwwwPasoMolino',
        procedencia:'Del Paso Molino yatusabe',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'Maluma Maluma',
        procedencia:'ARG',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'D.Martinss',
        procedencia:'NovoHamburgo',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'Yenderson.C',
        procedencia:'Varadero',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'ManuelAA',
        procedencia:'IslaDelEntretenimiento',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'卢卡斯 ',
        procedencia:'台湾',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'伊莎贝尔',
        procedencia:'上海',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'L4P1ZZZconsciente',
        procedencia:'RD',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'YOLOSwaGG',
        procedencia:'LA',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'LuuuGonzalez2000',
        procedencia:'Corrientes',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'VanessaSoarez99',
        procedencia:'BahiaBR',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'Pipitaaa12',
        procedencia:'CABJ',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'444555Luahn',
        procedencia:'Shangai',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'RobertoCarlos',
        procedencia:'?',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'JoaoLema',
        procedencia:'BR<3',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'Chiníítáá  _\|/_',
        procedencia:'Marte',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'xXLulzzXx',
        procedencia:'Andromeda',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },
    {
        nombre:'Farruko ;)',
        procedencia:'PR',
        intentos:(Math.random() * (5-3) + 3).toFixed(0)
    },


]

let jugadoresOrdenados = jugadoresPrecargados.sort((a,b) => a.intentos - b.intentos || a.nombre.localeCompare(b.nombre));



let tabla = document.querySelector(".tablaJugadores");

const crearTabla = _ => tabla.innerHTML = `<thead><tr><th>Nombre</th><th>Procedencia</th><th>Intentos</th></tr></thead>`


const listar = (a) => tabla.innerHTML += `<tbody><tr><td>${a.nombre}</td><td>${a.procedencia}</td><td>${a.intentos}</td></tr></tbody>`

const rellenarTabla = (j) => j.forEach(listar);

crearTabla();
rellenarTabla(jugadoresOrdenados);


