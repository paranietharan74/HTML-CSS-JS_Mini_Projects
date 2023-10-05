const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let hrs = min = sec = miliSec = 0;

let StartTimer;

function UpdateDisplay() {
    // Format time
    const Thrs = hrs < 10 ? '0' + hrs : hrs;
    const Tmin = min < 10 ? '0' + min : min;
    const Tsec = sec < 10 ? '0' + sec : sec;
    const TmiliSec = miliSec < 10 ? '0' + miliSec : miliSec;

    document.querySelector('.hrs').innerText = Thrs;
    document.querySelector('.min').innerText = Tmin;
    document.querySelector('.sec').innerText = Tsec;
    document.querySelector('.miliSec').innerText = TmiliSec;
}

btnStart.addEventListener('click', () => {
    StartTimer = setInterval(() => {
        miliSec++;
        if (miliSec === 100) {
            sec++;
            miliSec = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hrs++;
            min = 0;
        }
        UpdateDisplay();
    }, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(StartTimer);
});

btnReset.addEventListener('click', () => {
    try {
        clearInterval(StartTimer);
    } catch (error) {
        console.error('An error occurred while stopping the timer:', error);
    }
    hrs = min = sec = miliSec = 0;
    UpdateDisplay();
});
