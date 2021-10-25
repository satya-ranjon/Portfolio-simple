$('document').ready(function () {
    $('body').materialScrollTop();

    new WOW().init();

        $('html').smoothScroll(1000);


        $('.vg-nav').vegasMenu();


});



$('document').ready(function () {

    $('.header_carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        smartSpeed: 3000,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });

    $('.header_single_box2 a').magnificPopup({
        type: 'image'
    });
    $('.service .service_single_box a').magnificPopup({
        type: 'image'
    });

});