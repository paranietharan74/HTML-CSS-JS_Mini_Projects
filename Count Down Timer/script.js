// const curentDate = new Date();
// console.log(curentDate);

// const currentYear = new Date().getFullYear();
// console.log(currentYear);

// const nextYear = new Date(`January 1 ${currentYear + 1}`);
// console.log(nextYear);

// const diff = nextYear - curentDate;
// console.log(diff);

// const days = Math.floor(diff / 1000 / 60 / 60 / 24);
// const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
// const minutes = Math.floor((diff / 1000 / 60) % 60);
// const seconds = Math.floor((diff / 1000) % 60);

// console.log(days);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");

function UpdateTime() {
  const curentDate = new Date();
  const currentYear = new Date().getFullYear();
  const nextYear = new Date(`January 1 ${currentYear + 1}`);
  const diff = nextYear - curentDate;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  //console.log(days + " " + hours + " " + minutes + " " + seconds);
  Days.innerHTML = days<10?"0"+days:days;
  Hours.innerHTML=hours<10?"0"+hours:hours;
  Minutes.innerHTML=minutes<10?"0"+minutes:minutes;
  Seconds.innerHTML=seconds<10?"0"+seconds:seconds;
}

//UpdateTime();
setInterval(UpdateTime, 1000);