$(window).ready(function() {
        const gameStart = $('.btn_game_start');
        const time = $('#timer').html(timer);

        $(gameStart).click(function () {
            let timer = 60;

        setInterval(function() {
            if(timer > 0) {
                $('#timer').html(--timer);
            }
            else {
                console.log('koniec')
            }
        }, 1000);
    })
});