(function() {


    var button = document.querySelector(".scroll-top");

    function animateScroll() {

        if(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop  > 0) {
            window.scrollBy(0, -5);
            setTimeout(animateScroll, 10);
        }

    }

    button.addEventListener("click", function(e) {

        e.stopPropagation();

        animateScroll();

    }, false);

    window.addEventListener("scroll", function() {

        if(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop >= 10) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }

    }, false);


})();