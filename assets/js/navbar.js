

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
        let width = $(this).width();
        if(width > 480 && responsive_menu.is(':hidden')) {
            responsive_menu.removeAttr('style');
        }
    });
    $('nav li').on('click', function(e) {
        let width = $(window).width();
        if(width < 480 ) {
            responsive_menu.slideToggle();
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 100) {
            $('nav').addClass('shrink');

        }
        else {
            $('nav').removeClass('shrink');
        }
    });
});


$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 700) {
            $('nav').addClass('opacity');

        }
        else {
            $('nav').removeClass('opacity');
        }
    });
});



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

