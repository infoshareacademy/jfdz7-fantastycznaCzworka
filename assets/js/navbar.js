

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function(){
    responsive_menu = $('.navbar_ul');
    $('#menu-acces').on('click', function(e) {
        e.preventDefault();
        responsive_menu.slideToggle();
    });
    $(window).resize(function(){
        var obtener_ancho = $(this).width();
        if(obtener_ancho > 480 && responsive_menu.is(':hidden')) {
            responsive_menu.removeAttr('style');
        }
    });
    $('nav li').on('click', function(e) {
        var obtener_ancho = $(window).width();
        if(obtener_ancho < 480 ) {
            responsive_menu.slideToggle();
        }
    });
});