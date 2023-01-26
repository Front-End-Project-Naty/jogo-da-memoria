const cartas = document.querySelectorAll('.carta');

function viraCarta() {
    this.classList.toggle('flip');
}

cartas.forEach(carta => carta.addEventListener ('click', viraCarta));

