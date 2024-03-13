// Ініціалізація mini app
Telegram.WebApp.init()

// Функція для збільшення лічильника
function increaseCount() {
  const user = Telegram.WebApp.initDataUnsafe.user;

  fetch('http://localhost:8000/api/clicks/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'telegram_id': user.id })
  });
}

// Додавання події натискання на кнопку
document.getElementById('button').addEventListener('click', increaseCount);
