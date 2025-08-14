$(document).ready(function () {
    var swiper = new Swiper('.swiper1', {
        // Optional parameters

        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true, //센터모드



        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });

    var swiper2 = new Swiper('.swiper2', {
        // Optional parameters

        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,


        // Navigation arrows
        navigation: {
            nextEl: '.swiper2-button-next',
            prevEl: '.swiper2-button-prev',
        },


    });

    var swiper3 = new Swiper('.swiper3', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true, //센터모드
        // 간헐적 빈칸 방지
        loopAdditionalSlides: 1,



        pagination: {
            el: ".swiper3-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper3-button-next',
            prevEl: '.swiper3-button-prev',
        },


    });
});