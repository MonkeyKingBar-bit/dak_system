// JavaScript для интерактивного меню
document.addEventListener('DOMContentLoaded', function() {
    // Получаем кнопку меню и само меню
    const menuToggle = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('nav');

    // Проверяем, существуют ли элементы
    if (menuToggle && navMenu) {
        // Добавляем обработчик события клика к кнопке меню
        menuToggle.addEventListener('click', function() {
            // Добавляем или удаляем класс 'active', который показывает или скрывает меню
            navMenu.classList.toggle('active');
        });
    }
});

