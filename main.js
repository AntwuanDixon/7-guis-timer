//const { metaProperty } = require("babel-types");

const meter = document.querySelector('#timer-gauge');
const timerSlider = document.querySelector('#timer-slider');
const timerValue = document.querySelector('#timer-value')
const timerSecondsElapsed = document.querySelector('#timer-seconds-elapsed');
const maxTimerSeconds = document.querySelector('#timer-seconds-max');

var kicked = false;
var timer;

function stopCount () {
    clearInterval(timer)
}

timerSlider.addEventListener('input', function () {
    let i = 0;
    maxTime = parseInt(timerSlider.value);
    if (kicked === false) {
        timer = setInterval(countUp, 1000)
        kicked = true;
    }

    function countUp () {
        console.log(i);

        if (i >= maxTime) {
            clearInterval(timer)
        } else {
            i++;
            timerSecondsElapsed.innerHTML = i;
        }
    }
})
