$(window).ready(function() {
    var sideslider = $('[data-toggle=collapse-side]'),
        sel = sideslider.attr('data-target'),
        sel2 = sideslider.attr('data-target-2'),
        contentPosition;

    sideslider.click(function(event) {
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
    //Navigation menu follow
    $(document).on('scroll', function() {
        contentPosition = $('header').height() + 25;
        var stop = Math.round();

        if (window.scrollY > contentPosition) {
            $('main nav').addClass('navbar navbar-fixed-top navbar-inverse');
        } else {
            $('main nav').removeClass("navbar navbar-fixed-top");
        }

    });

});
