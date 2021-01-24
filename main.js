//const { metaProperty } = require("babel-types");

const meter = document.querySelector('#timer-gauge');
const timerSlider = document.querySelector('#timer-slider');
const timerValue = document.querySelector('#timer-value')
const timerSecondsElapsed = document.querySelector('#timer-seconds-elapsed');
const maxTimerSeconds = document.querySelector('#timer-seconds-max');
const resetBtn = document.querySelector('#reset-btn');
var secondsElapsed = 0;
var kicked = false;
var timer;
meter.value = 0;
timerSecondsElapsed.innerHTML = 0;


function stopCount () {
    clearInterval(timer)
}

function triggerTimer () {
    maxTimerSeconds.innerHTML = timerSlider.value;
    maxTime = parseInt(timerSlider.value);
    var i = secondsElapsed;
    var meterStep;
    if (kicked === false) {
        timer = setInterval(countUp, 1000);
        kicked = true;
    }

    function countUp () {
        if (i >= maxTime) {
            clearInterval(timer);
            kicked = false;
            secondsElapsed = i;
        } else {
            i++;
            timerSecondsElapsed.innerHTML = i;
            meterStep = 100/maxTime;
            meter.value = meterStep.toFixed(2) * i;
        }
    }
}


timerSlider.addEventListener('input', function () {
    triggerTimer ();
})

resetBtn.addEventListener('click', function () {
    secondsElapsed = 0;
    timerSecondsElapsed.innerHTML = secondsElapsed;
    meter.value = 0;
    triggerTimer ();
})
