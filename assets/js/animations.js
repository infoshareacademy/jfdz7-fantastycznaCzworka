const $functionalityBoxes = $('.functionality__image, .functionality__image2');

const $functionsOneOffset = $('#functions').offset().top;
const $functionsTwoOffset = $('#functions2').offset().top;
const $formOffset = $('#form').offset().top;
const $abouTeamOffset = $('#about-team').offset().top;

function rotateElement() {
    $(this).addClass('rotate');
}

$functionalityBoxes.on('click', rotateElement);
