export let cardsChosenNames = [];
export let cardsMatchedId = [];
export let cardsWonId = []

export function checkMatch() {
    const allCards = document.querySelectorAll('.card');
    if (cardsChosenNames[0] !== cardsChosenNames[1]) {
        console.log("No Match");
        console.log(cardsChosenNames);
        const card1 = allCards[cardsMatchedId[0]];
        const card2 = allCards[cardsMatchedId[1]];
        setTimeout(() => {
            flipBack(card1);
            flipBack(card2)
        }, 500);
    } else {
        console.log("It's a Match");
        cardsWonId.push(cardsMatchedId[0], cardsMatchedId[1]);
        console.log(cardsWonId);
    }
    cardsChosenNames = [];
    cardsMatchedId = [];

}
function flipBack(index) {
    index.classList.remove('flip')
};