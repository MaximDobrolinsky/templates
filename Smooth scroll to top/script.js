$('.totop').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        'scrollTop': $('header').offset().top
    }, 1000);
});