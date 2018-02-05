
// $(window).ready(function() {
let score = document.getElementsByClassName('score-counter')[0];
let scoreCounter = 0;

const game = {
        tilesImgs : [
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
        flippedCards : [],
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
        shuffle :  function() {
            // Create a clone of the array
            let arrClone = this.tilesImgs.slice(0);
            // Shuffle the array
            return arrClone.sort(() => Math.random() - 0.5);
        },


        start: function () {
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

            this.tilesImgs = this.shuffle();
            console.log(this.tilesImgs);
            let cards = document.querySelectorAll('.card');
            for (let i = 0; i < cards.length; i++) {
                if(cards[i].classList.contains('flipped')) {
                    cards[i].classList.toggle('flipped');
                }
                cards[i].querySelector('.back').style.backgroundImage = this.tilesImgs[i];


                cards[i].addEventListener('click',this.flip.bind(this));

            }

        }

    };
game.start();
// });