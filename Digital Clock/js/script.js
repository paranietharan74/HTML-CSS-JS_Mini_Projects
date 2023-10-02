// function UpdateTime(){
//     var time = new Date();

//     var hrs = time.getHours();
//     var min = time.getMinutes();
//     var sec = time.getSeconds();
//     var txt = "AM";

//     if(hrs>12){
//         hrs = hrs-12;
//         txt = "PM";
//     }else if(hrs == 0){
//         hrs = 12;
//     }else if(hrs == 12){
//         txt = "PM";
//     }

//     var showTime = `${hrs}:${min}:${sec} ${txt}`;
//     console.log(showTime);
// }

// setInterval(UpdateTime, 1000);
const clock = document.querySelector('.clock');

function UpdateTime() {
    var time = new Date();

    var hrs = time.getHours().toString().padStart(2, '0');
    var min = time.getMinutes().toString().padStart(2, '0');
    var sec = time.getSeconds().toString().padStart(2, '0');
    var txt = "AM";

    if (hrs > 12) {
        hrs = (hrs - 12).toString().padStart(2, '0');
        txt = "PM";
    } else if (hrs == 0) {
        hrs = '12';
    } else if (hrs == 12) {
        txt = "PM";
    }

    var showTime = `${hrs}:${min}:${sec} ${txt}`;
    // console.log(showTime);

    clock.innerHTML=showTime;
}

setInterval(UpdateTime, 1000);