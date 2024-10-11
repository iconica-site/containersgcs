// Открыть форму в Каталоге
document.addEventListener('DOMContentLoaded', function() {
    var popupButtons = document.querySelectorAll('#poppup-buy');
    
    popupButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.getElementById('catalog-car-popup-container').style.display = 'block';
        });
    });

    document.getElementById('catalog-car-popup-close').addEventListener('click', function() {
        document.getElementById('catalog-car-popup-container').style.display = 'none';
    });

    document.getElementById('catalog-car-popup-background').addEventListener('click', function() {
        document.getElementById('catalog-car-popup-container').style.display = 'none';
    });
});

// Открыть дропдаун Каталог
document.getElementById('catalogButton').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвратить переход по ссылке
    var dropdown = document.getElementById('catalogDropdown');

    // Показать или скрыть дропдаун
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Закрытие дропдауна при клике вне его
window.addEventListener('click', function(event) {
    var dropdown = document.getElementById('catalogDropdown');
    if (!event.target.matches('#catalogButton') && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// дропдауны внутри дропдауна Каталог
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle'); // Находим все элементы с классом toggle

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем переход по ссылке

            // Переключаем класс active у соответствующего ul
            const ulToToggle = this.nextElementSibling;
            ulToToggle.classList.toggle('active');
        });
    });
});

// Получаем все элементы списка с классом "category-item"
const categoryItems = document.querySelectorAll('.catalog-car-category-item');
const dropdownItems = document.querySelectorAll('.catalog-car-category-dropdown li');

categoryItems.forEach((item) => {
    item.addEventListener('click', function() {
        // Проверяем, активен ли уже этот элемент
        const isActive = item.classList.contains('active');

        // Если элемент был активен, убираем класс active и скрываем дропдаун
        if (isActive) {
            item.classList.remove('active');
            item.nextElementSibling.style.display = 'none';
        } else {
            // Если элемент не был активен, добавляем класс active и показываем дропдаун
            item.classList.add('active');
            const dropdown = item.nextElementSibling;
            if (dropdown && dropdown.classList.contains('catalog-car-category-dropdown')) {
                dropdown.style.display = 'block';
            }
        }
    });
});

// Добавляем обработчик клика для элементов внутри дропдаунов
dropdownItems.forEach((item) => {
    item.addEventListener('click', function() {
        // Переключаем состояние активного элемента
        const isActive = item.classList.contains('active');
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с классом faq-text
    const faqBlocks = document.querySelectorAll('.faq-block');

    faqBlocks.forEach(faqBlock => {
        const faqText = faqBlock.querySelector('.faq-text');
        const faqDropdownText = faqBlock.querySelector('.faq-dropdown-text');
        const img = faqText.querySelector('img');

        faqText.addEventListener('click', function() {
            const isVisible = faqDropdownText.style.display === 'block';

            // Переключение видимости блока и смена изображения
            faqDropdownText.style.display = isVisible ? 'none' : 'block';
            img.src = isVisible ? 'img/plus (2).png' : 'img/minus.png';
        });
    });
});

// Свайперы с главной страницы
const swiper1 = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});

var swiper2 = new Swiper('.mobile-akreditatori', {
slidesPerView: 1,
spaceBetween: 10,
freeMode: true, // Включаем свободный режим для плавности
breakpoints: {
    640: {
        slidesPerView: 2,  // Показывать 2 слайда на экранах больше 640px
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 3,  // Показывать 3 слайда на экранах больше 1024px
        spaceBetween: 30,
    }
}
});