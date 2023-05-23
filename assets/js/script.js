let empezarBtn = document.getElementById("empezar");
let cancelarBtn = document.getElementById("cancelar");
let tiempoPantalla = document.getElementById("here");
let contadorInput = document.getElementById("seconds");
let temporizador;



let contador = () => {
    let tiempo = contadorInput.value;
    empezarBtn.disabled = true;
    cancelarBtn.disabled = false;

        temporizador = setInterval(()=> {
        tiempoPantalla.innerText = tiempo < 10 ? `0${tiempo}` : tiempo;
        tiempo--
        if (tiempo < 0){
            empezarBtn.disabled = false;
            clearInterval(temporizador);
            emitirAlarma()
        }
        console.log(temporizador)
    }, 1000)
};

let detener = () => {
    empezarBtn.disabled = false;
    cancelarBtn.disabled = true;
    clearInterval(temporizador);
    contadorInput.value = 0;
    tiempoPantalla.innerText ="00"
};

let emitirAlarma = () => {
    let alarma = new Audio ("./assets/audio/alarma.mp3");
    alarma.play();
    setTimeout(() => {
        alarma.pause()
    }, 5000)
}

empezarBtn.addEventListener("click", contador)
cancelarBtn.addEventListener("click", detener)