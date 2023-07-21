let ganador = Math.floor(Math.random() * 100) + 1;
let chances = 5;
const refresca = "Si querés volver a jugar, refrescá la página.";
let jugadorNuevo;





function numeroIncorrecto(numero) {
    document.querySelector("#div").classList.remove("diverror")
    document.querySelector("#div").offsetWidth;
    document.querySelector("#div").classList.add("diverror")
    document.querySelector("#div").onanimationend = () => alert("Incorrecto, te quedan " + (chances) + " chances. Pista: " + pistaNumero(numero, chances));
}






function ingresarNumero() {
    let numero = Number(document.querySelector("#numero").value);
    if (numero > 100 || numero < 1)
        alert("El número debe estar entre 1 y 100.")
    else

        //while (chances > 0) {
        for (let i = chances; i > 0; i--) {
            if (!consultarNumero(numero)) {
                chances--;
                jugadorNuevo.intentos++;
                if (chances > 0) numeroIncorrecto(numero);
            }
            break;
        }
    if (consultarNumero(numero)) tuResultado('rgb(171, 250, 171)', "Felicidades, ganaste la partida! ");
    else if (chances == 0) tuResultado('red', "Lo sentimos, perdiste la partida. El correcto erá: " + ganador + ". ");
}

function consultarNumero(numero) {

    return (numero == ganador)
}


function pistaNumero(numero, chances) {
    let pista = "";


    if (chances == 4) {
        switch (true) {
            case ganador % 10 == 0:
                pista = "El numero es múltiplo de 10 y también "
                break;
            case ganador % 5 == 0:
                pista = "El numero es múltiplo de 5 y también "
                break;
            case ganador % 2 == 0:
                pista = "El numero es par y también "
                break;
            case ganador % 2 != 0:
                pista = "El numero es impar y también "
                break;
        }
    } else {
        switch (true) {
            case ganador > 0 && ganador < 16:
                pista = "El numero esta entre 1-15 y es "
                break;
            case ganador > 15 && ganador < 31:
                pista = "El numero esta entre 16-30 y es "
                break;
            case ganador > 30 && ganador < 46:
                pista = "El numero esta entre 31-45 y es "
                break;
            case ganador > 45 && ganador < 61:
                pista = "El numero esta entre 46-60 y es "
                break;
            case ganador > 60 && ganador < 76:
                pista = "El numero esta entre 61-75 y es "
                break;
            case ganador > 75 && ganador < 90:
                pista = "El numero esta entre 76-90 y es "
                break;
            default:
                pista = "El numero es mayor a 90 y es "
        }
    }


    if (numero > ganador) pista += "menor al número que pusiste."
    else pista += "mayor al número que pusiste."
    return pista;
}
function tuResultado(color, texto) {
    jugadoresPrecargados.push(jugadorNuevo);
    document.querySelector("#boton").disabled = true;
    document.querySelector("#body").style.background = color;
    alert(texto + refresca);
    crearTabla();
    rellenarTabla(jugadoresOrdenados.slice(0,5));
} 