(function() {


    let button = document.querySelector(".scroll-top");

    function animateScroll() {

        if(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop  > 0) {
            window.scrollBy(0, -20);
            setTimeout(animateScroll, 5);
        }

    }

    button.addEventListener("click", function(e) {

        e.stopPropagation();

        animateScroll();

    }, false);

    window.addEventListener("scroll", function() {

        if(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop >= 2000) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }

    }, false);

    let $anchorLinks = $('.menu-nav__list').find('a[href^="#"]');
    function getTextFromAnchor(){
        document.title = $(this).text();
    }
    $anchorLinks.on('click', getTextFromAnchor);


})();