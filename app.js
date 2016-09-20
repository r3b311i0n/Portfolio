var main = function () {
    $(".navhead>li").addClass("animated bounceInDown");

    $(".logo").addClass("animated fadeIn");

    $(".about p").addClass("animated bounceInLeft");
    $(".about img").addClass("animated bounceInRight");

    waypoints();
};

var _startAnim = function (obj) {
    $(obj).addClass("animated infinite");
};

var _stopAnim = function (obj) {
    $(obj).removeClass("animated infinite");
};

var _aboutClick = function (obj) {
    $(".navhead p").removeClass("animated infinite pulse");
    $(obj).addClass("animated infinite pulse");

    scrollToAbout();
};

var _portfolioClick = function (obj) {
    $(".navhead p").removeClass("animated infinite pulse");
    $(obj).addClass("animated infinite pulse");

    scrollToPortfolio();
};

var _contactClick = function (obj) {
    $(".navhead p").removeClass("animated infinite pulse");
    $(obj).addClass("animated infinite pulse");

    scrollToContact();
};

var scrollToAbout = function () {
    $("html, body").animate({
        scrollTop: $("#top").offset().top
    }, 300);
};

var scrollToPortfolio = function () {
    $("html, body").animate({
        scrollTop: $(".portfolio").offset().top
    }, 300);
};

var scrollToContact = function () {
    $("html, body").animate({
        scrollTop: $(".contact").offset().top
    }, 300);
};

var waypoints = function () {
    var _wayAbout = new Waypoint({
        element: $(".about"),
        handler: function () {
            $(".navhead p").removeClass("animated infinite pulse");
            $("#aboutButton").addClass("animated infinite pulse");
        },
        offset: -50
    });

    var _wayPortHeader = new Waypoint({
        element: $(".portfolioHeading"),
        handler: function () {
            $(".portfolioHeading").addClass("animated fadeIn").css("opacity: 100;");
            $(".navhead p").removeClass("animated infinite pulse");
            $("#portButton").addClass("animated infinite pulse");
        },
        offset: "bottom-in-view"
    });

    var _wayThumbRow1 = new Waypoint({
        element: $(".thumbRow1"),
        handler: function () {
            $(".thumbRow1").addClass("animated fadeIn").css("opacity: 100;");
        },
        offset: 400
    });

    var _wayThumbRow2 = new Waypoint({
        element: $(".thumbRow2"),
        handler: function () {
            $(".thumbRow2").addClass("animated fadeIn").css("opacity: 100;");
        },
        offset: 400
    });

    var _wayThumbRow3 = new Waypoint({
        element: $(".thumbRow3"),
        handler: function () {
            $(".thumbRow3").addClass("animated fadeIn").css("opacity: 100;");
            $(".navhead p").removeClass("animated infinite pulse");
            $("#portButton").addClass("animated infinite pulse");
        },
        offset: 400
    });

    var _wayContactHeader = new Waypoint({
        element: $(".contactHeading"),
        handler: function () {
            $(".contactHeading").addClass("animated fadeIn").css("opacity: 100;");
            $(".navhead p").removeClass("animated infinite pulse");
            $("#contactButton").addClass("animated infinite pulse");
        },
        offset: "bottom-in-view"
    });

    var _waySocialButtons = new Waypoint({
        element: $(".social"),
        handler: function () {
            $(".social").addClass("animated rotateIn").css("opacity: 100;");
        },
        offset: "bottom-in-view"
    });
};

$(document).ready(main);
