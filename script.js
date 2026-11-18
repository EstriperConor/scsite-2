// script.js

// Устанавливаем дату начала сезона (например, 1 июля 2026 года, 00:00:00)
// Если вы хотите, чтобы сезон начался "сейчас", поставьте new Date().getTime()
// Но для примера я ставлю фиксированную дату в прошлом, чтобы таймер сразу показывал дни.
const START_DATE = new Date('2026-07-01T00:00:00').getTime(); 

// Ключ для хранения в localStorage (если вдруг понадобится сбросить)
const STORAGE_KEY = 'subcoin_season_start';

// Проверяем, есть ли уже сохраненная дата в браузере
let seasonStart = localStorage.getItem(STORAGE_KEY);

if (!seasonStart) {
    // Если нет, сохраняем текущую дату начала
    localStorage.setItem(STORAGE_KEY, START_DATE);
    seasonStart = START_DATE;
} else {
    // Если есть, берем сохраненную
    seasonStart = parseInt(seasonStart);
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = now - seasonStart;

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновляем элементы на странице, если они есть
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

// Запускаем таймер сразу и обновляем каждую секунду
updateTimer();
setInterval(updateTimer, 1000);
