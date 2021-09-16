jQuery(document).ready(function ($) {
    // reponsive animate menu
    $("#menu-reponsive").click(function () {
        $("nav").toggleClass("animate-menu");
    });
        // link a header
    $("#menu > nav > a").on("click", function (event) {
        $("#menu > nav > a").removeClass("active");
        $(this).addClass("active");
    });
    // animate home page & offset left
    if ($("#home-section3").length >0) {
        $(window).resize(function () {
                let _left = $("#logo").offset().left;
                console.log(_left);
                if ($(window).width() >= 874) {
                    $("#home-section2,#home-section3,.text-image").css('padding-left',_left);                }
        }).trigger('resize');
        $(function () {
            let _width = $(".text-section2").width();

            $(".sidebar1,.text-image").width(_width);
        });
    }
    //


    // home page animate
    $(".button-section1 > svg").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#home-section3").offset().top }, 500);
    });

    // scrol home page
    if ($("#home-section1").length >= 1) {
        $(window).on("scroll", function (event) {
            var pos_body = $("html,body").scrollTop();
            var pos_img = $("#home-section3").offset().top;
            // console.log(pos_img);
            // console.log(pos_body);
            if (pos_body > pos_img - 400) {
                $(".sidebar2").addClass("animate__animated animate__bounceInRight");
            } else {
                $(".sidebar2").removeClass("animate__animated animate__bounceInRight");
            }
        });
    }

    // home page slick
    if ($(".variable-width").length > 0 ) {
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
    }
    // home page  value
    $("#home-section2 .card-link a").each(function () {
        let _this = $(this);
        let _text = _this.text();
        let _number = _this.attr("data-number");
        if (_number > 0) {
            _this.text(_number + _text);
        } else {
            _this.text();
            _this.css("visibility", "hidden");
        }
    });
    // accordion page
    $(".ac-trigger").on("click", function (event) {
        event.preventDefault();
        let _ac = $(this).parents(".ac"),
            _current = _ac.siblings('.show');
        _ac.toggleClass("show");
        _ac.children(".ac-header").toggleClass("bottom");
        _ac.find(".dont-rotate").toggleClass("rotate");
        if( _current.length ){
            _current.find(".ac-header").removeClass("bottom");
            _current.find(".dont-rotate").removeClass("rotate");
            _current.removeClass('show');
        }
    });
            // accordion-page show & hide
    if ($(".accordion-container").length >0) {
        var data_accor = $(".accordion-container").attr("data-name");
        if (data_accor == "true") {
            new Accordion(".accordion-container", {
                duration: 400,
                openOnInit: [0],
            });
        } else {
            new Accordion(".accordion-container", {
                duration: 400,
            });
        }
    }               
    // carousel
        $(".button-next").on("click", function () {
            $(this).parents(".carousel").find(".carousel-control-next-icon").trigger("click");
        });
        $(".button-pre").on("click", function () {
            $(this).parents(".carousel").find(".carousel-control-prev-icon").trigger("click");
        });
        $(".button-zoom").on("click", function () {
            $(this).parents(".carousel").find(".carousel-item.active a").trigger("click");
        });
    // checked accordion page
    $(function () {
        $("#vehicle1").on("click", function (event) {
            if ($(this).is(":checked")) {
                $(".dont-free").parents(".ac").hide();
            } else {
                $(".dont-free").parents(".ac").show();
            }
        });
    });
});
