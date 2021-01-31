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
    console.log(i);
    var meterStep;
    if (kicked === false) {
        timer = setInterval(countUp, 100);
        kicked = true;
    }

    function countUp () {
        meterStep = 100/maxTime;
        meter.value = meterStep.toFixed(2) * i;
        if (i >= maxTime) {
            kicked = false;
            clearInterval(timer);
            secondsElapsed = i;
        }
        else {
            i = i + 0.1;
            i = (Math.floor(i * 100) / 100);
            timerSecondsElapsed.innerHTML = Math.floor(i.toFixed(1));
            console.log(i);
        }    
    }
}

timerSlider.addEventListener('input', function () {
    triggerTimer ();
})

resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    kicked = false;
    secondsElapsed = 0;
    timerSecondsElapsed.innerHTML = secondsElapsed;
    meter.value = 0;
    triggerTimer ();
})
