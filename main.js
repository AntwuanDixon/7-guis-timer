//const { metaProperty } = require("babel-types");

const meter = document.querySelector('#timer-gauge');
const timerSlider = document.querySelector('#timer-slider');
const timerValue = document.querySelector('#timer-value')
const timerSecondsElapsed = document.querySelector('#timer-seconds-elapsed');
const maxTimerSeconds = document.querySelector('#timer-seconds-max');
timerSecondsElapsed.innerHTML = 0;
var kicked = false;
var timer;

function stopCount () {
    clearInterval(timer)
}

timerSlider.addEventListener('input', function () {
    maxTimerSeconds.innerHTML = timerSlider.value;
    currentTime = parseInt(timerSecondsElapsed.innerHTML);
    maxTime = parseInt(timerSlider.value);
    let i = currentTime;

    if (kicked === false) {
        timer = setInterval(countUp, 1000)
        kicked = true;
    } else if (currentTime == maxTime) {
        timer = setInterval(countUp, 1000)
    }

    function countUp () {
        if (i >= maxTime) {
            clearInterval(timer)
        } else {
            i++;
            timerSecondsElapsed.innerHTML = i;
        }
    }
})
