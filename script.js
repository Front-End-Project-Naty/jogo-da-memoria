const cartas = document.querySelectorAll('.carta');

function flipCard() {
    this.classList.toggle('flip');
}

cartas.forEach(carta => carta.addEventListener ('click', flipCard));

