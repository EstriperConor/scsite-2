
const START_DATE = new Date('2026-11-18T00:00:00').getTime(); 

const STORAGE_KEY = 'subcoin_season_start';

let seasonStart = localStorage.getItem(STORAGE_KEY);

if (!seasonStart) {
    localStorage.setItem(STORAGE_KEY, START_DATE);
    seasonStart = START_DATE;
} else {
    seasonStart = parseInt(seasonStart);
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = now - seasonStart;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.innerText = days;
        hoursEl.innerText = hours;
        minutesEl.innerText = minutes;
        secondsEl.innerText = seconds;
    }
}

updateTimer();
setInterval(updateTimer, 1000);
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const symbols = ['❅', '❆', '•', '*'];
    snowflake.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 10 + 5; 
    snowflake.style.fontSize = size + 'px';
    
    const duration = Math.random() * 10 + 5;
    snowflake.style.animationDuration = duration + 's';
    
    snowflake.style.opacity = Math.random() * 0.5 + 0.3;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 200);
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            
            const content = header.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
function copyIP() {
    const ipText = "Скоро <3";
    navigator.clipboard.writeText(ipText).then(() => {
        alert('IP-адрес скопирован: ' + ipText);
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
    });
}
