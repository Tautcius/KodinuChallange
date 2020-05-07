import Data from "./data.js"

// Shuffle data
let playArray = [];
console.log(playArray);
while (Data.length !== 0) {
    let randomIndex = Math.floor(Math.random() * Data.length);
    playArray.push(Data[randomIndex]);
    Data.splice(randomIndex, 1);
}
console.log(playArray);

// fliping cards
function flipCard() {
    this.classList.toggle('flip')
}
//creating cards
const grid = document.querySelector('.container')


function createGrid() {
    for (let i = 0; i < 11; i++) {
        const card = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');
        const imgKodinu = document.createElement('img');
        const imgGuess = document.createElement('img');
        front.setAttribute('class', 'front')
        back.setAttribute('class', 'back');
        card.setAttribute('class', 'card');
        imgKodinu.setAttribute('src', './asset/Kodinu.png');
        imgGuess.setAttribute('src', './asset/Cars.png');
        card.addEventListener('click', flipCard);
        grid.appendChild(card).append(front, back);
        back.appendChild(imgKodinu);
        front.appendChild(imgGuess);
    }
}
console.log(grid);


// Create grid
createGrid();


