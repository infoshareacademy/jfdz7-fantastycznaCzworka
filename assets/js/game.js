const $timer = $('#timer');
const $endGamePopup = $('#endgame');

//Endgame Popup

const countTime = () => {
    let timer = 60;
    $timer.html(timer);
    setInterval( () => {
        if(timer > 0) {
            $timer.html(--timer);
        }
        else {
            // wywołanie po zakonczeniu czasu
            console.log('koniec')
        }
    }, 1000);
};

$(window).on('load', countTime);


//Popup script

const openPopup = () => {
    $endGamePopup.toggleClass('popup-open')
};

$('#openbutton').on('click', openPopup);

