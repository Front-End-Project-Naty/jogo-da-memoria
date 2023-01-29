const cartas = document.querySelectorAll('.carta');

let virouCarta = false;
let bloqueiaTabuleiro = false;
let primeiraCarta, segundaCarta;

function viraCarta() {
    if(bloqueiaTabuleiro) return;
    if (this === primeiraCarta) return;

    this.classList.add('flip');

    if (!virouCarta) {
        virouCarta = true;
        primeiraCarta = this;
        return;
    }

    segundaCarta = this;
    bloqueiaTabuleiro = true;

    formouPar();
}

function formouPar() {
    let formouPar = primeiraCarta.dataset.roupa === segundaCarta.dataset.roupa
    formouPar ? desabilitaCartas() : desviraCartas();

}


function desabilitaCartas() {
    primeiraCarta.removeEventListener('click', viraCarta);
    segundaCarta.removeEventListener('click', viraCarta);

    resetaTabuleiro();
}

function desviraCartas(){
    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');

        resetaTabuleiro();
    }, 1500);
}

function resetaTabuleiro() {
    [virouCarta, bloqueiaTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

(function embaralhar() {
    cartas.forEach(carta => {
        let aleatorio = Math.floor(Math.random()*12);
        carta.style.order = aleatorio;
    });
})();

cartas.forEach(carta => carta.addEventListener ('click', viraCarta));



