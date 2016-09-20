var main = function () {
    $(".navhead>li").addClass("animated bounceInDown");

    $(".logo").addClass("animated fadeIn");

    $(".about p").addClass("animated bounceInLeft");
    $(".about img").addClass("animated bounceInRight");

    // $(".portLeft").addClass("animated bounceInLeft");
    // $(".portRight").addClass("animated bounceInRight");

    $(".contactHeading").addClass("animated fadeIn");

    waypoints();
};

var _startAnim = function (obj) {
    $(obj).addClass("animated infinite");
};

var _stopAnim = function (obj) {
    $(obj).removeClass("animated infinite");
};

var _aboutClick = function (obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");

    scrollToAbout();
};

var _portfolioClick = function (obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");

    scrollToPortfolio();
};

var _contactClick = function (obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");

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
    var _wayPortHeader = new Waypoint({
        element: $(".portfolioHeading"),
        handler: function () {
            $(".portfolioHeading").addClass("animated fadeIn").css("opacity: 100;");
        },
        offset: "bottom-in-view"
    });

    var _wayThumb = new Waypoint({
        element: $(".thumbRow1"),
        handler: function () {
            $(".portLeft .thumbRow1").addClass("animated bounceInLeft").css("opacity: 100;");
        },
        offset: "bottom-in-view"
    });
};

$(document).ready(main);
