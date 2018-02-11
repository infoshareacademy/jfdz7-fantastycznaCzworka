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


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});