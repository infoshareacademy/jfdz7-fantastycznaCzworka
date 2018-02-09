window.onload = function () {
    const popup = $(this).attr('popup_open');
    $(popup).fadeIn('fast');


    $('.btn_popup_close').click(function () {
        $(popup).fadeOut();

    })
};