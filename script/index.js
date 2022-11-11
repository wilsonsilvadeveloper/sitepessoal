var sobremin = document.getElementById("divSobre");
var video = document.getElementById("divVideo");
var musica = document.getElementById("divmusica");
var botaoMusica = document.getElementById("musica");

var contador = 0;

function sobreMin(){
    
    if (contador == 0 ) {
        sobremin.style.display = "flex";
        contador++;
    }

    else if (contador == 1) {
        sobremin.style.display = "none";
        contador = 0;
    }
}

function videoYoutube() {
    video.style.display = "flex";
}

function musicas() {
    musica.style.display = "flex"
    botaoMusica.style.display = "none";
}