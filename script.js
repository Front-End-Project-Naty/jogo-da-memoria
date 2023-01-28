const cartas = document.querySelectorAll('.carta');

let virouCarta = false;
let primeiraCarta, segundaCarta;

function viraCarta() {
    this.classList.add('flip');

    if (!virouCarta) {
        virouCarta = true;
        primeiraCarta = this;
        return;
    }

    segundaCarta = this;
    virouCarta = false;

    formouPar();
}

function formouPar() {
    if(primeiraCarta.dataset.roupa === segundaCarta.dataset.roupa) {
        desabilitaCartas();
        return;
    }

    desviraCartas();
}


function desabilitaCartas() {
    primeiraCarta.removeEventListener('click', viraCarta);
    segundaCarta.removeEventListener('click', viraCarta);
}

function desviraCartas(){
    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');
    }, 1500);
}

cartas.forEach(carta => carta.addEventListener ('click', viraCarta));



