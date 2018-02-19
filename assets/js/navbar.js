
    $(window).on('scroll', function() {
        if($(document).scrollTop() > 100) {
            $('nav').addClass('shrink');

        }
        else {
            $('nav').removeClass('shrink');
        }



    });

const $page = $('body, html');
function changePageTitle() {
    const anchor = $(this).attr('href');
    const $activeEl = $('.active');


}

function scrollToSection() {
    const animationTime = 500;
    const anchor = $(this).attr('href');

    $(this)
        .parent()
        .addClass('active')
        .siblings()
        .removeClass('active');

    $page.animate({ scrollTop: $(anchor).offset().top }, animationTime);
}
function getCoordinateSection() {
    const $sections = $('.anchor');
    $sections.each(function () {
        console.log($(document).scrollTop());
        console.log($(this).offset().top);
         if($(document).scrollTop() ===  $(this).offset().top) {

            document.title = $(this).text();
         }
         else console.log('blad');
    });
}


let $anchorLinks = $('.menu-nav__list').find('a[href^="#"]');
$(window).on('scroll', getCoordinateSection);
$anchorLinks.on('click',scrollToSection);

