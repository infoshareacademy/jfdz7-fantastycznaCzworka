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
        if($(document).scrollTop() > 250) {
            $('nav').addClass('opacity');

        }
        else {
            $('nav').removeClass('opacity');
        }
    });
});

