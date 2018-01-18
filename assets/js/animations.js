const $sectionFunctions = $("#functions_2");
const $sectionFuncOffset = $sectionFunctions.offset().top;
const $AboutTeamPhotos = $(".photo");
const $aboutTeamOffset = $AboutTeamPhotos.offset().top;
const $startSection = $('#banner');

function animateSecondFunctions() {
    let windowBottomEdge = $(window).scrollTop() + $(window).height();

    if (windowBottomEdge > $sectionFuncOffset) {
        $sectionFunctions.addClass('fadeInUp');
    }
}

$(window).on('scroll', animateSecondFunctions);

function animateTeamPhotos() {
    let windowBottomEdge = $(window).scrollTop() + $(window).height();

    if (windowBottomEdge > $aboutTeamOffset) {
        $AboutTeamPhotos.addClass('zoomIn');
    }
}

$(window).on('scroll', animateTeamPhotos);

$(document).ready(function () {
    $startSection.addClass('fadeInRight');
});

$(document).ready(function () {
    $startSection.addClass('fadeInRight')
});

