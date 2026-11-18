
const START_DATE = new Date('2026-11-18T00:00:00').getTime(); 

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
// --- Логика для аккордеона (Правила) ---
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Переключаем активный класс у заголовка (для поворота иконки)
            header.classList.toggle('active');
            
            // Получаем следующий элемент (контент)
            const content = header.nextElementSibling;

            // Если контент открыт, закрываем его
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                // Иначе открываем, устанавливая max-height равной высоте контента
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
// Функция для копирования IP-адреса
function copyIP() {
    const ipText = "play.subcoin.net";
    navigator.clipboard.writeText(ipText).then(() => {
        // Можно добавить всплывающее уведомление, но пока просто alert
        alert('IP-адрес скопирован: ' + ipText);
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
    });
}
