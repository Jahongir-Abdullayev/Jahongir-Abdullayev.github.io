$(document).ready(function () {


    var block = $(".container-fluid div[class$='-block']");
    block.each(function () {
        if ($(this).children('.' + ($(this).attr('class')) + '-center').length > 0) {
            $(this).children('.' + ($(this).attr('class')) + '-center:not(.home-block-center)').css({
                'opacity': '0'
            });
        } else {
            $(this).css({
                'opacity': '0'
            });
        }
    });

    $(document).scroll(function animate() {
        block.each(function () {
            if ($(this).children('.' + ($(this).attr('class')) + '-center').length > 0) {
                if ($(this).children('.' + ($(this).attr('class')) + '-center').get(0).getBoundingClientRect().top < $(window).innerHeight() - 150) {
                    $(this).children('.' + ($(this).attr('class')) + '-center').animate({
                        'opacity': '1'
                    }, 400);
                }
            } else {
                if ($(this).get(0).getBoundingClientRect().top < $(window).innerHeight() - 150) {
                    $(this).animate({
                        'opacity': '1'
                    }, 400);
                }
            }
        });
    });


    var btn_m = $('.button-nav-menu');
    btn_m.click(function () {
        $(this).next('ul').toggleClass('run-menu');
        if ($(window).innerWidth() < 660) {
            $('.nav .language-menu').toggleClass('run-lang-menu');
        }
    });


    var drop_m = $('.dropdown-menu');
    drop_m.prev('a').click(function () {
        drop_m.toggleClass('run-drop-menu');
    });


    var link_m = $("a[id*='-block']");
    link_m.click(function () {
        btn_m.next('ul').removeClass('run-menu');
        $('.nav .language-menu').removeClass('run-lang-menu');
        drop_m.removeClass('run-drop-menu');
        if ($(this).attr('id').slice($(this).attr('id').length - 3, $(this).attr('id').length - 1) != '-d') {
            var scrollTo = $(this).attr('id');
            $('html, body').animate({
                scrollTop: $('.' + scrollTo).offset().top
            }, 1000);

        } else {
            var scrollTo = $(this).attr('id').slice(0, $(this).attr('id').length - 3);
            $('html, body').animate({
                scrollTop: $('.' + scrollTo).offset().top
            }, 1000);
        }
    });


    $(document).scroll(function() {
        if ($(this).scrollTop() > $(window).innerHeight()) {
            $('.scrolltop').css({'right':'3%','bottom':'7%'});
        } else {
            $('.scrolltop').css({'right':'calc(-3vw - 40px)','bottom':'calc(-3vw - 40px)'});
        }
    });

    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


});