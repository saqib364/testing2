$(window).on('scroll load', function() {
    if ($(".navbar__custom").offset().top > 60) {
        $(".navbar__custom").addClass("navbar--open");
    } else {
        $(".navbar__custom").removeClass("navbar--open");
    }
});