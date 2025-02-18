let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 15;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`, `Acertaste el numero en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);

    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`, `El numero es menor`);
        } else {
            asignarTextoElemento(`p`, `El numero es mayor`);
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo) +1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // ya sorteamos todos los numeros?
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento(`p`,`Ya se sortearon todos los números posibles`);
    }
    // Si el número está en el listado
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
function condicionesIniciales() {
    asignarTextoElemento(`h1`, `¡Juego del número secreto!`);
    asignarTextoElemento(`p`, `Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarjuego() {
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de número
    //generar el número aleatorio
    //Inicializar el número de Intentos
    condicionesIniciales();
    //deshabilitar al botón del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();




