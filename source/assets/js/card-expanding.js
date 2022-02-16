const cards = document.querySelectorAll(".card");
const cardTwo = document.querySelector(".js-card-two");
const cardThree = document.querySelector(".js-card-three");

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeClassActive();
        card.classList.add("active");
        if (cardThree.classList.contains('active')) {
            cardTwo.style.left = "122px";
        } else {
            cardTwo.style.left = "";
        }

    })
})

function removeClassActive() {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}