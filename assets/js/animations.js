const $sectionFunctions = $("#functions_2");
const $sectionFuncOffset = $sectionFunctions.offset().top;

function animateSecondFunctions() {
    let windowBottomEdge = $(window).scrollTop() + $(window).height();

    if (windowBottomEdge > $sectionFuncOffset) {
        $sectionFunctions.addClass('fadeInUp');
    }
}
$(window).on('scroll', animateSecondFunctions);

