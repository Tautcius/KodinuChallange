import Data from "./data.js"

// reserved for future to select dificulty
const initialArray = Data.splice(0, Data.length - 2);
const arrayToShuffle = initialArray.concat(initialArray);
console.log(arrayToShuffle.length);

// Shuffle data
function shuffle(array) {
    let playArray = [];
    while (array.length !== 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        playArray.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }
    return playArray;
};

const finalArray = shuffle(arrayToShuffle);
let cardsChosen = [];
let cardsMatchedId = [];
let cardsWonId = [];
// Check for match
function checkMatch() {
    let allCards = document.querySelectorAll('.card');
    console.log(allCards);
    const firstCard = cardsChosen[0];
    console.log(firstCard);
    const secondCard = cardsChosen[1];
    console.log(secondCard);
    if (firstCard !== secondCard) {
        allCards[cardsMatchedId[0]].classList.remove('flip');
        console.log(allCards[cardsMatchedId[0]]);
        allCards[cardsMatchedId[1]].classList.remove('flip');
        console.log(allCards[cardsMatchedId[1]]);
        console.log("No Match");
    } else {
        console.log("It's a Match");
        cardsWonId = cardsWonId.concat(cardsMatchedId);
    }
    cardsChosen = [];
    cardsMatchedId = [];
}

// fliping cards
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(finalArray[cardId].name);
    console.log(finalArray[cardId].name);
    cardsMatchedId.push(cardId);
    console.log(cardId);
    this.classList.add('flip');
    if (cardsChosen.length === 2) {
        checkMatch();
    }

}

//creating cards
const grid = document.querySelector('.container')
console.log(grid);
function createGrid(arrayToPlay) {
    for (let i = 0; i < arrayToPlay.length; i++) {
        const card = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');
        const imgKodinu = document.createElement('img');
        const imgGuess = document.createElement('img');
        front.setAttribute('class', 'front')
        back.setAttribute('class', 'back');
        card.setAttribute('class', 'card');
        imgKodinu.setAttribute('src', './asset/Kodinu.png');
        imgGuess.setAttribute('src', arrayToPlay[i].path)
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card).append(front, back);
        back.appendChild(imgKodinu);
        front.appendChild(imgGuess);
    }
}

// Create grid
createGrid(finalArray);


