
$(window).ready(function() {

    let timer = 60;
    $('#timer').html(timer);
    setInterval(function() {
        if(timer > 0) {
            $('#timer').html(--timer);
        }
        else {
            // wywołanie po zakonczeniu czasu
            console.log('koniec')

        }
    }, 1000);

});


//Popup script

const openPopup = () => {
    $('#endgame').toggleClass('popup-open')
};

$('#openbutton').on('click', openPopup);

