import Data from "./data.js"

// reserved for future to select dificulty
const initialArray = Data.splice(0, Data.length - 2);
const arrayToShuffle = initialArray.concat(initialArray);

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
    if (cardsChosen[0] !== cardsChosen[1]) {
        setTimeout(
            allCards[cardsMatchedId[0]].classList.remove('flip'), 400);
        setTimeout(
            allCards[cardsMatchedId[1]].classList.remove('flip'), 400);
        console.log("No Match");
    } else {
        console.log("It's a Match");
        cardsWonId = cardsWonId.concat(cardsMatchedId);
    }
    cardsChosen = [];
    cardsMatchedId = [];
    finished();
}

// fliping cards
var flips = 0;
function flipCard() {
    startCount();
    flips++;
    document.getElementById('flips').innerHTML = flips;
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(finalArray[cardId].name);
    cardsMatchedId.push(cardId);
    this.classList.add('flip');
    if (cardsMatchedId[0] === cardsMatchedId[1]) {
        cardsChosen.pop();
        cardsMatchedId.pop();
    }
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 400);
    }

}
// Time calculation
var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById('time').innerHTML = c;
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
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

//Finish function
function finished() {
    if (finalArray.length == cardsWonId.length) {
        console.log(finalArray.length)
        console.log(cardsWonId.length)
        stopCount();
        document.getElementById('winner').classList.add('open');
        document.getElementById('winTime').innerHTML = c;
        document.getElementById('winFlips').innerHTML = flips;
    }
}
// Create grid
createGrid(finalArray);