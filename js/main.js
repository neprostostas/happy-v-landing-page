document.addEventListener("DOMContentLoaded", (event) => {

    /* ======== Swiper ======== */
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            10: {
                slidesPerView: 1.2,
            },
            674: {
                slidesPerView: 1.9,
            },
            1280: {
                slidesPerView: 2.3,
            },
            1920: {
                slidesPerView: 2.73,
            },
        },
    });





});
