
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
// --- Эффект снега ---
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return; // Если контейнера нет, выходим

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Случайные символы для снежинок (звездочка, точка или снежинка)
    const symbols = ['❅', '❆', '•', '*'];
    snowflake.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Случайная позиция по горизонтали
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // Случайный размер шрифта
    const size = Math.random() * 10 + 5; // от 5px до 15px
    snowflake.style.fontSize = size + 'px';
    
    // Случайная продолжительность падения (от 5 до 15 секунд)
    const duration = Math.random() * 10 + 5;
    snowflake.style.animationDuration = duration + 's';
    
    // Случайная прозрачность
    snowflake.style.opacity = Math.random() * 0.5 + 0.3;

    // Добавляем снежинку на страницу
    snowContainer.appendChild(snowflake);

    // Удаляем снежинку после того, как она упадет, чтобы не засорять DOM
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Создаем новую снежинку каждые 200 миллисекунд
setInterval(createSnowflake, 200);

updateTimer();
setInterval(updateTimer, 1000);
