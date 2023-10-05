const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let hrs=min=sec=miliSec=0;

function UpdateDisplay() {
    // format time
    hrs = hrs<10?'0'+hrs:hrs;
    min = min<10?'0'+min:min;
    sec = sec<10?'0'+sec:sec;
    miliSec = miliSec<10?'0'+miliSec:miliSec;

    document.querySelector('.hrs').innerText=hrs;
    document.querySelector('.min').innerText=min;
    document.querySelector('.sec').innerText=sec;
    document.querySelector('.miliSec').innerText=miliSec;
}

btnStart.addEventListener('click',UpdateDisplay)
btnStop.addEventListener('click', ()=>{alert('Stop')})
btnReset.addEventListener('click', ()=>{
    hrs=min=sec=miliSec=0;
})