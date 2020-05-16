import { setDificulty } from "./data.js"
import { startCount, stopCount, c } from './time.js'
import { flips, flipCounter } from './flipCounter.js'
import { checkMatch, cardsChosenNames, cardsMatchedId, cardsWonId } from './checkMatch.js'
// import { selectDificulty, dificulty } from './dificulty.js'
let finalArray = []

document.getElementById("startGame").onclick = function () { selectDificulty() };

function selectDificulty() {
    var node = document.querySelector('.container')
    node.querySelectorAll('*').forEach(n => n.remove());
    const e = document.getElementById("dificulty");
    let dificulty = null;
    dificulty = e.options[e.selectedIndex].value;
    console.log(dificulty)
    finalArray = setDificulty(dificulty);
    // Create grid
    console.log(finalArray)
    createGrid(finalArray);
}

// fliping cards
function flipCard() {
    startCount();
    const cardId = this.getAttribute('data-id');
    const cardName = this.getAttribute('data-name');
    cardsChosenNames.push(cardName);
    cardsMatchedId.push(cardId);
    this.classList.add('flip');
    if (cardsChosenNames.length === 2) {
        if (cardsMatchedId[0] === cardsMatchedId[1]) {
            console.log('two cards ids are equal')
            this.classList.remove('flip');
            cardsChosenNames.length = 0
            cardsMatchedId.length = 0
        } else {
            console.log('two cards ids are NOT equal')
            checkMatch()
        }
    }
    flipCounter();
    finished();
}

//creating cards
const grid = document.querySelector('.container')
function createGrid(arrayToPlay) {
    for (let i = 0; i < arrayToPlay.length; i++) {
        const card = document.createElement('div');
        const imgKodinu = document.createElement('img');
        const imgGuess = document.createElement('img');
        card.setAttribute('class', 'card');
        imgKodinu.setAttribute('src', './asset/Kodinu.png');
        imgKodinu.setAttribute('class', 'back');
        imgGuess.setAttribute('src', arrayToPlay[i].path);
        imgGuess.setAttribute('class', 'front');
        card.setAttribute('data-id', i);
        card.setAttribute('data-name', arrayToPlay[i].name);
        card.addEventListener('click', flipCard);
        grid.appendChild(card).append(imgKodinu, imgGuess);
    }
}

//Finish function
function finished() {
    if (finalArray.length == cardsWonId.length) {
        stopCount();
        document.getElementById('winner').classList.add('open');
        document.getElementById('winTime').innerHTML = c;
        document.getElementById('winFlips').innerHTML = flips;
    }
}
