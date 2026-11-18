
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
/* Анимация подпрыгивания для кнопки */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.btn-play {
    /* ... ваши существующие стили ... */
    animation: bounce 3s infinite; /* Подпрыгивает каждые 3 секунды */
}

/* Убираем анимацию при наведении, чтобы кнопка не дергалась */
.btn-play:hover {
    animation: none;
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(57, 255, 20, 0.4);
}
/* Стили для снега */
#snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Чтобы снег не мешал кликать по кнопкам */
    z-index: -1; /* Снег должен быть позади контента */
    overflow: hidden;
}

.snowflake {
    position: absolute;
    top: -10px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1em;
    user-select: none;
    animation: fall linear forwards;
    /* Разные снежинки будут иметь разную скорость и размер */
}

@keyframes fall {
    to {
        transform: translateY(100vh); /* Падает вниз за пределы экрана */
    }
}
updateTimer();
setInterval(updateTimer, 1000);
