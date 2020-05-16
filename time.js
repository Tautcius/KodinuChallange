// Time calculation
export var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById('time').innerHTML = c;
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

export function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

export function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}