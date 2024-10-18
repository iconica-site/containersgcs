function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("open-menu")) {
        menu.classList.remove("open-menu");
        hideAllSections();
    } else {
        menu.classList.add("open-menu");
        document.getElementById("main-menu").style.display = "block";
    }
}

function hideAllSections() {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("category-menu").style.display = "none";
    document.getElementById("industry-menu").style.display = "none";
}

function showMainMenu() {
    hideAllSections();
    document.getElementById("main-menu").style.display = "block";
}

function showCategoryMenu() {
    hideAllSections();
    document.getElementById("category-menu").style.display = "block";
}

function showIndustryMenu() {
    hideAllSections();
    document.getElementById("industry-menu").style.display = "block";
}

function toggleSubMenu(submenuId, link) {
    const submenu = document.getElementById(submenuId);
    const span = link.querySelector('span'); // Получаем span внутри ссылки

    // Проверяем текущее состояние подменю
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
        span.innerHTML = "-"; // Меняем на минус
    } else {
        submenu.style.display = "none";
        span.innerHTML = "+"; // Меняем на плюс
    }
}

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

// Скрипт от страницы ЛСТК

function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("open-menu")) {
        menu.classList.remove("open-menu");
    } else {
        menu.classList.add("open-menu");
    }
}

function toggleCatalog() {
    const catalogSubmenu = document.getElementById("catalog-submenu");
    if (catalogSubmenu.style.display === "block") {
        catalogSubmenu.style.display = "none";
    } else {
        catalogSubmenu.style.display = "block";
    }
}

document.querySelectorAll('.components-buttons a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        // Удаляем класс active у всех ссылок
        document.querySelectorAll('.components-buttons a').forEach(btn => {
            btn.classList.remove('active');
        });

        // Добавляем класс active к текущей ссылке
        this.classList.add('active');

        // Получаем индекс нажатой ссылки
        const index = this.dataset.index;

        // Скрываем все изображения
        document.querySelectorAll('.components-left-img img, .components-right-img-big img').forEach(img => {
            img.classList.add('hidden');
        });

        // Показываем нужные изображения
        document.querySelectorAll('.components-left-img img')[index].classList.remove('hidden');
        document.querySelectorAll('.components-right-img-big img')[index].classList.remove('hidden');

        // Скрываем все тексты
        document.querySelectorAll('.components-text span').forEach(text => {
            text.classList.add('hidden');
        });

        // Показываем нужный текст
        document.querySelector(`.components-text span[data-index="${index}"]`).classList.remove('hidden');
    });
});


let currentIndex = 0;
const blocks = document.querySelectorAll('.block');
const totalBlocks = blocks.length;

document.querySelectorAll('.nextBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        blocks[currentIndex].style.display = 'none'; // Скрываем текущий блок
        currentIndex = (currentIndex + 1) % totalBlocks; // Переход к следующему блоку
        blocks[currentIndex].style.display = 'flex'; // Показываем следующий блок
    });
});

document.querySelectorAll('.prevBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        blocks[currentIndex].style.display = 'none'; // Скрываем текущий блок
        currentIndex = (currentIndex - 1 + totalBlocks) % totalBlocks; // Переход к предыдущему блоку
        blocks[currentIndex].style.display = 'flex'; // Показываем предыдущий блок
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

// Модульные здания аккордион

function toggleAccordion(id) {
    const item = document.getElementById(id);
    const isActive = item.classList.contains('active');
    
    // Закрываем все остальные блоки
    document.querySelectorAll('.accordion-item').forEach((el) => {
      el.classList.remove('active');
    });
  
    // Если блок не был активен, активируем его
    if (!isActive) {
      item.classList.add('active');
    }
  }

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
    slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    spaceBetween: 10, // отступ
    speed: 800, // Плавная прокрутка
    freeMode: true, // написал выше
    effect: 'slide', // Эффект плавного перехода
    touchRatio: 1.5, // Увеличение чувствительности при свайпе
    resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    // grabCursor: true, // Указатель мыши меняется на "руку"
    loop: false, // Отключаем бесконечную прокрутку
});

var swiper3 = new Swiper('.kar-lstk-r-img-slide', {
    slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    spaceBetween: 10, // отступ
    speed: 800, // Плавная прокрутка
    freeMode: true, // написал выше
    effect: 'slide', // Эффект плавного перехода
    touchRatio: 1.5, // Увеличение чувствительности при свайпе
    resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    // grabCursor: true, // Указатель мыши меняется на "руку"
    loop: false, // Отключаем бесконечную прокрутку
});

var swiper4 = new Swiper('.dynamic-content-mobile', {
    slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    spaceBetween: 20, // отступ
    speed: 800, // Плавная прокрутка
    freeMode: true, // написал выше
    effect: 'slide', // Эффект плавного перехода
    touchRatio: 1.5, // Увеличение чувствительности при свайпе
    resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    // grabCursor: true, // Указатель мыши меняется на "руку"
    loop: false, // Отключаем бесконечную прокрутку
});

var swiper5 = new Swiper('.components-button-slider-mobile', {
    slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    spaceBetween: 20, // отступ
    speed: 800, // Плавная прокрутка
    freeMode: true, // написал выше
    effect: 'slide', // Эффект плавного перехода
    touchRatio: 1.5, // Увеличение чувствительности при свайпе
    resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    // grabCursor: true, // Указатель мыши меняется на "руку"
    loop: false, // Отключаем бесконечную прокрутку
});

