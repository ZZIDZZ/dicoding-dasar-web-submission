let currentCardIndex = 0;
const cards = document.querySelectorAll('.carousel-container article');
const totalCards = cards.length;

function changeCard() {
    cards.forEach((card, index) => {
        card.style.display = index === currentCardIndex ? 'block' : 'none';
    });
    currentCardIndex = (currentCardIndex + 1) % totalCards;
}

// Ensure DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', (event) => {
    changeCard();
    setInterval(changeCard, 3000);
});
