export var flips = 0;
export function flipCounter() {
    flips++;
    document.getElementById('flips').innerHTML = flips;
};
