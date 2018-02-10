let countDown;
let timeLoss;
let timer = document.getElementsByClassName('timer')[0];
// $(window).ready(function() {
let score = document.getElementsByClassName('score-counter')[0];
let scoreCounter = 0;

const game = {
    tilesImgs: [
        'url("./assets/photo/cursor.svg")',
        'url("./assets/photo/pen.svg")',
        'url("./assets/photo/diamond.svg")',
        'url("./assets/photo/cake.svg")',
        'url("./assets/photo/clock.svg")',
        'url("./assets/photo/box.svg")',
        'url("./assets/photo/video.svg")',
        'url("./assets/photo/callendar.svg")',
        'url("./assets/photo/cursor.svg")',
        'url("./assets/photo/pen.svg")',
        'url("./assets/photo/diamond.svg")',
        'url("./assets/photo/cake.svg")',
        'url("./assets/photo/clock.svg")',
        'url("./assets/photo/box.svg")',
        'url("./assets/photo/video.svg")',
        'url("./assets/photo/callendar.svg")'
    ],
    flippedCards: [],
    flip: function (e) {
        if (!e.target.parentElement.classList.contains('flipped') && this.flippedCards.length < 2) {
            e.target.parentElement.classList.toggle('flipped');

            this.flippedCards.push(e.target.parentElement);

            if (this.flippedCards.length === 2) {
                this.checkMatch();
            }
        }
        console.log(this.flippedCards);
    },
    checkMatch: function () {
        if (this.flippedCards[0].querySelector('.back').style.backgroundImage === this.flippedCards[1].querySelector('.back').style.backgroundImage) {
            this.flippedCards = [];

            score.innerText = ++scoreCounter;

        }
        else {
            setTimeout(this.flipBack.bind(this), 1000);
        }
    },
    flipBack: function () {
        this.flippedCards[0].classList.toggle('flipped');
        this.flippedCards[1].classList.toggle('flipped');

        this.flippedCards = [];
    },
    shuffle: function () {
        let arrClone = this.tilesImgs.slice(0);
        return arrClone.sort(() => Math.random() - 0.5);
    },

    start: function () {
        timer.innerText = '1:00';
        countDown = setInterval(this.decrementTime.bind(this), 1000);
        timeLoss = 3;

        this.tilesImgs = this.shuffle();
        console.log(this.tilesImgs);
        let cards = document.querySelectorAll('.card');
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('flipped')) {
                cards[i].classList.toggle('flipped');
            }
            cards[i].querySelector('.back').style.backgroundImage = this.tilesImgs[i];


            cards[i].addEventListener('click', this.flip.bind(this));
        }

    },

    decrementTime: function () {
        if (timeLoss === 0) {
            timer.innerText = '0:0' + timeLoss;
            clearInterval(countDown);
            this.finalize().bind(this);

        }
        if (timeLoss < 10) {
            timer.innerText = '0:0' + timeLoss;
        }
        if (timeLoss >= 10) {
            timer.innerText = '0:' + timeLoss;
        }
        if (scoreCounter === 8) {
            clearInterval(countDown);
            this.finalize().bind(this);
        }

        timeLoss--;

    },
    finalize: function() {
        let endGame = document.getElementsByClassName('endgame')[0] ;
        let restart = document.getElementsByClassName('btn-again')[0];
        endGame.style.display = 'block';

        restart.addEventListener('click', this.start.bind(this));


        if (scoreCounter === 8) {
            endGame.querySelector('h1').innerHTML = 'Wygrana!';
        }
        else {
            endGame.querySelector('h1').innerText = 'Przegrana!';
        }
            endGame.querySelector('#final-score').innerHTML = 'Punkty: ' + scoreCounter;
            endGame.querySelector('#time').innerText = 'Pozostały czas: ' + timeLoss + ' sekund';
    }
};

$('.btn_game_start').click('click', function () {
    game.start();
});