window.onload = function () {
    const popup = $(this).attr('popup_open');
    $(popup).fadeIn('fast');


    $('.btn_game_start').click(function () {
        $(popup).fadeOut();

    })
};