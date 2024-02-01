import gsap from 'https://cdn.skypack.dev/gsap';

createOpenTimeline();

function createOpenTimeline() {
    const tl = gsap.timeline();

    // Анимация: появление снизу для .hero__title и .hero__btn
    tl.from(".hero__title, .hero__btn", {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: "power2.out"
    }, 0.8)

    // Анимация: изменение непрозрачности для .hero__descr
    .from(".hero__descr", {
        opacity: 0,
        duration: 1,
        ease: "slow(0.9,0.7,false)"
    }, 1.28)

    // Анимация: изменение непрозрачности для .photos__author
    .from(".photos__author", {
        opacity: 0,
        duration: 1,
        ease: "slow(0.9,0.7,false)"
    }, 1.82)

    // Анимация: увеличение и изменение непрозрачности для .photos-1, .photos-2, .photos-3
    .from(".photos-1", {
        scale: 0.75,
        duration: 0.35,
        ease: "power2.out"
    }, 1.30)
    .from(".photos-1", {
        opacity: 0,
        duration: 0.5
    }, 1.30)

    .from(".photos-2", {
        scale: 0.75,
        duration: 0.35,
        ease: "power2.out"
    }, 1.52)
    .from(".photos-2", {
        opacity: 0,
        duration: 0.5
    }, 1.52)

    .from(".photos-3", {
        scale: 0.75,
        duration: 0.35,
        ease: "power2.out"
    }, 1.82)
    .from(".photos-3", {
        opacity: 0,
        duration: 0.5
    }, 1.82);

    return tl;
}

function handleMenuClick() {
    const tl = gsap.timeline({ paused: true });

    // Анимация для .menu__top: появление сверху вниз
    tl.from(".menu__top", {
        y: -100,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out"
    }, 0)

    // Анимация для .menu__container: появление снизу вверх
    .from(".menu__container", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, 0.4)

    // Анимация для .menu__nav: появление снизу вверх
    .from(".menu__nav", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, 1)

    // Анимация для .social и .menu__right: появление снизу вверх
    .from(".social, .menu__right", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, 1.5);

    return tl;
}

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger'); // Получили кнопку
    const closeButton = document.querySelector('.menu .close'); // Получили кнопку закрытия
    const menu = document.querySelector('.menu'); // Получили само меню
    let isMenuOpen = false; // Флаг, чтобы проверить, открыто ли меню
    let menuTimeline; // Переменная для хранения таймлайна анимации

    burger.addEventListener('click', function() {
        if (!isMenuOpen) { // Проверяем, не открыто ли уже меню
            menu.classList.add('menu--open');
            if (menuTimeline) {
                menuTimeline.kill(); // Остановим и удалим предыдущую анимацию
            }
            menuTimeline = handleMenuClick(); // Создаем новый таймлайн анимации
            menuTimeline.play(); // Воспроизводим анимацию только если меню не открыто
            isMenuOpen = true; // Устанавливаем флаг в true, чтобы пометить, что меню открыто
        }
    });

    closeButton.addEventListener('click', function() {
        if (isMenuOpen) { // Проверяем, открыто ли меню
            menu.classList.remove('menu--open');
            if (menuTimeline) {
                menuTimeline.reverse(); // Проигрываем обратную анимацию
                menuTimeline.kill(); // Удаляем анимацию
            }
            isMenuOpen = false; // Устанавливаем флаг в false, чтобы пометить, что меню закрыто
        }
    });
});
