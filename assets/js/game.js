
$(window).ready(function() {

    let timer = 60;
    $('#timer').html(timer);
    setInterval(function() {
        if(timer > 0) {
            $('#timer').html(--timer);
        }
        else {
            console.log('koniec')

        }
    }, 1000);

});