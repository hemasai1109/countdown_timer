const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const newYearDate = "14 Jan 2024"

function countdown () {
    const newDate = new Date(newYearDate);
    const currentDate = new Date();
    const ms = newDate - currentDate;
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = Math.floor(totalSeconds) %60; 
    const minutes = Math.floor(totalSeconds/60) % 60;
    const hours = Math.floor(totalSeconds/3600) % 24;
    const days = Math.floor(totalSeconds/3600/24);
    

    daysEl.innerHTML=days;
    hoursEl.innerHTML =formatTime(hours);
    minutesEl.innerHTML =formatTime(minutes);
    secondsEl.innerHTML =formatTime(seconds);


}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown , 1000)