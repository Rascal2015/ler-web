jQuery(document).ready(function ($) {
    // carousel-slick
    $(".variable-width").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                    infinite: true,
                    centerMode: true,
                },
            },
            {
                breakpoint: 522,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    infinite: true,
                    centerMode: true,
                },
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    // link a header
    $("#menu > nav > a").on("click", function (event) {
        event.preventDefault();
        $("#menu > nav > a").removeClass("active");
        $(this).addClass("active");
    });
    $(".button-section1 > svg").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#home-section3").offset().top }, 500);
    });
    // scrol
    $(window).on("scroll", function (event) {
        var pos_body = $("html,body").scrollTop();
        var pos_img = $("#section3").offset().top;
        // console.log(pos_img);
        // console.log(pos_body);
        if (pos_body > pos_img - 400) {
            $(".sidebar2").addClass("animate__animated animate__bounceInRight");
        } else {
            $(".sidebar2").removeClass("animate__animated animate__bounceInRight");
        }
    });
    // reponsive animate menu
    $("#menu-reponsive").click(function () {
        $("nav").toggleClass("animate-menu");
    });
    // JS MENU WHEN SMALL SCREEN
    $(window).resize(function () {
        if ($(window).width() <= 760) {
            $("#menu > nav > a").click(function (event) {
                $("nav").removeClass("animate-menu");
            });
        }
    });
    $(window).resize(function () {
        $(function () {
            let _left = $("#logo").offset().left;
            if ($(window).width() >= 874) {
                $(".text-section1,.text-section4").offset({ left: _left });
                // console.log(_left);
                return false;
            }
        });
    });
    $(function () {
        let _left = $("#logo").offset().left;
        if ($(window).width() >= 874) {
            $(".text-section1,.text-section4").offset({ left: _left });
            // console.log(_left);
        }
    });

    $(".card-link a").each(function () {
        let _this = $(this);
        let _text = $(_this).text();
        let _number = $(_this).attr("data-number");
        if (_number > 0) {
            $(_this).text(_number + _text);
        } else {
            $(_this).text();
            $(_this).css("visibility", "hidden");
        }
    });

    $(function () {
        let _width = $(".text-section2").width();

        $(".sidebar1,.text-section4,.text-section1").width(_width);
        console.log(_width);
    });
    jQuery(document).ready(function ($) {
    console.log(" are you ready??");
    // MENU
    $("#menu-reponsive").click(function () {
        $("nav").toggleClass("animate-menu");
    });

    $(window).resize(function () {
        if ($(window).width() <= 760) {
            $("#menu > nav > a").click(function (event) {
                $("nav").removeClass("animate-menu");
            });
        }
    });
    $(".button-next").on("click", function () {
        $("#carouselExampleIndicators").find(".carousel-control-next-icon").trigger("click");
    });
    $(".button-pre").on("click", function () {
        $("#carouselExampleIndicators").find(".carousel-control-prev-icon").trigger("click");
    });
    $(".button-zoom").on("click", function () {
        $("#carouselExampleIndicators").find(".carousel-item.active a").trigger("click");
    });

new Accordion('.accordion-default');
  

    
  new Accordion('.accordion-container',{
// acc.open('#ac-0');
// openAll();
 duration: 400,
 // openOnInit:[null],
 });
  $('').on("click", function(event) {
    /* Act on the event */
    let _ac =  $(this).parents('.ac');
 $(_ac).toggleClass('show');
  $(_ac).find('.ac-header').toggleClass('bottom');
  $(this).children('.ac-trigger span:nth-child(2)').toggleClass('rotate');

});

   $('.button-pre').on("click", function(event){    
    $(this).parents('.carousel').find('.carousel-control-prev-icon').trigger('click');
});
    $('.button-next').on("click", function(event){    
    $(this).parents('.carousel').find('.carousel-control-next-icon').trigger('click');
});
    $('.button-zoom').on("click", function(event){    
    $(this).parents('.carousel').find('.carousel-item.active a').trigger('click');
});

   


   $(window).on('load', function(event) {
  $('body').removeClass('preloading');
  $('.load').delay(1000).fadeOut('fast');
});

});
