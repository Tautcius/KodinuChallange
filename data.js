
const Data =
    [
        {
            name: "ACDC",
            path: "./asset/ACDC.png"
        },
        {
            name: "BIC",
            path: "./asset/BIC.png"
        },
        {
            name: "Cars",
            path: "./asset/Cars.png"
        },
        {
            name: "Chupachups",
            path: "./asset/Chupachups.png"
        },
        {
            name: "CIA",
            path: "./asset/CIA.png"
        },
        {
            name: "Disney",
            path: "./asset/Disney.png"
        },
        {
            name: "DreamWorks",
            path: "./asset/DreamWorks.png"
        },
        {
            name: "Durex",
            path: "./asset/Durex.png"
        },
        {
            name: "GameOfThrones",
            path: "./asset/GameOfThrones.png"
        },
        {
            name: "Heineken",
            path: "./asset/Heineken.png"
        },
        {
            name: "History",
            path: "./asset/History.png"
        },
        {
            name: "Lego",
            path: "./asset/Lego.png"
        },
        {
            name: "Levis",
            path: "./asset/Levis.png"
        },
        {
            name: "Metallica",
            path: "./asset/Metallica.png"
        }
    ]

export function setDificulty(dificulty) {
    const dataCopy = Data;
    const initialArray = Data.splice(0, Data.length - dificulty);
    const arrayToShuffle = initialArray.concat(initialArray);
    return shuffle(arrayToShuffle);
}


function shuffle(arrayToShuffle) {
    let playArray = [];
    while (arrayToShuffle.length !== 0) {
        let randomIndex = Math.floor(Math.random() * arrayToShuffle.length);
        playArray.push(arrayToShuffle[randomIndex]);
        arrayToShuffle.splice(randomIndex, 1);
    }
    return playArray;

};