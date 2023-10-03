const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.min');
const second = document.querySelector('.sec');

function runClock() {
    const time = new Date();

    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hrs = time.getHours();
    // console.log(hrs + ' ' + min + ' ' + sec)

    const secD = sec/60;
    const minD = (secD+min)/60;
    const hrsD = (minD+hrs)/12;
    // console.log(hrsD + ' ' + minD + ' ' + secD)

    hours.style.setProperty('--rotation', hrsD*360);
    minutes.style.setProperty('--rotation', minD*360);
    second.style.setProperty('--rotation', secD*360);
}

setInterval(runClock, 1000);