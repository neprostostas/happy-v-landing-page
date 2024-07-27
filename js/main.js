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

    /* ======== FAQ ACCORDION ======== */
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", function() {
            const answer = this.querySelector(".faq-answer");
            const plusIcon = this.querySelector(".icon-plus");
            const minusIcon = this.querySelector(".icon-minus");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                plusIcon.style.display = "block";
                minusIcon.style.display = "none";
            } else {
                answer.style.display = "block";
                plusIcon.style.display = "none";
                minusIcon.style.display = "block";
            }
        });
    });

});