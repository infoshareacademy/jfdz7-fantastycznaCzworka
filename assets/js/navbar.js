let $anchorLinks = $('.menu-nav__list').find('a[href^="#"]');
const $page = $('body, html');


function scrollToSection() {
    const animationTime = 500;
    const anchor = $(this).attr('href');
    $page.animate({ scrollTop: $(anchor).offset().top }, animationTime);
}
function setClassActiveOnScroll() {
    const $active = $('.active');
    const $sections = $('.anchor');
    $sections.each(function (i) {
         if($(window).scrollTop() + 20 >=  $(this).offset().top) {
             $('.menu-nav__list-item a').removeClass('active');
            $anchorLinks.eq(i).addClass('active');
         }
    });
    document.title = $active.text();
}

$(window).on('scroll', function() {
    if($(document).scrollTop() > 100) {
        $('nav').addClass('shrink');

    }
    else {
        $('nav').removeClass('shrink');
    }
});
$(window).on('scroll', setClassActiveOnScroll);
$anchorLinks.on('click',scrollToSection);

