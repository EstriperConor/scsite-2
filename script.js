// script.js
// Простая имитация таймера (каждую секунду прибавляет время)
let seconds = 23;
let minutes = 22;
let hours = 18;
let days = 130;

setInterval(() => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
                days++;
            }
        }
    }
    
    // Обновляем цифры на странице, если элементы существуют
    if(document.getElementById('seconds')) {
        document.getElementById('seconds').innerText = seconds;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('hours').innerText = hours;
        document.getElementById('days').innerText = days;
    }
}, 1000);
