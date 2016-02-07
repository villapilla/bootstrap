$(window).ready(function() {
    var sideslider = $('[data-toggle=collapse-side]'),
        sel = sideslider.attr('data-target'),
        sel2 = sideslider.attr('data-target-2'),
        bodyWidth,
        contentPosition;
    sideslider.click(function(event) {
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
    //Resize dropdownMenu
    /*$(window).on('resize', function () {
        bodyWidth = document.body.clientWidth;
        if(bodyWidth > 768 && bodyWidth < 992) {
            $("#login ul").addClass("dropdown-menu");
        } else {
            $("#login ul").removeClass("dropdown-menu");
        }
    })*/
    //Navigation menu follow
    $(document).on('scroll', function() {
        contentPosition = $('header').height() + 25;
        var stop = Math.round();
        if (window.scrollY > contentPosition) {
            $('#nav_main').addClass('navbar navbar-fixed-top navbar-inverse');
        } else {
            $('#nav_main').removeClass("navbar navbar-fixed-top");
            $("main nav .side-collapse").css({top : (183 - window.scrollY) + "px"});
        }
    });

});
