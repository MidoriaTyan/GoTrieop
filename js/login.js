document.addEventListener('DOMContentLoaded', function() { 
    // функция, чтобы начать обрабатывать после загрузки DOM 

    const logmodal = document.getElementById('login-input');
    const btnLog = document.getElementById('nav-btn');
    const form = document.querySelector('#form'); // Получаем форму
    const inputs = Array.from(form.querySelectorAll('input')); // Получаем все поля ввода

    btnLog.onclick = function(event) {
        // при клике на кнопку открывается или закрывается модальное окно
        logmodal.classList.toggle('none');
    }

    function handleEmtyWindow(event) {
        // функция для обработки кликов вне модального окна
        if (!event.target.closest('.nav__login-inputs') && !event.target.closest('#nav-btn')) {
            logmodal.classList.add('none');
            window.removeEventListener('click', handleEmtyWindow);
        }
    }

    // Добавляем слушатель кликов по всему окну
    window.addEventListener('click', handleEmtyWindow);
    
    // Отправка формы через Enter
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event){
            if(event.key === 'Enter'){
                event.preventDefault(); // Предотвращаем действие по умолчанию
                form.submit(); // Отправить форму
            }
        });
    });

    // Обработка отправки формы
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    });

});
