var main = function () {
    $(".navhead>li").addClass("animated bounceInDown");

    $(".logo").addClass("animated fadeIn");

    $(".about p").addClass("animated bounceInLeft");
    $(".about img").addClass("animated bounceInRight");

    $(".portLeft").addClass("animated bounceInLeft");
    $(".portRight").addClass("animated bounceInRight");

    $(".portfolioHeading").addClass("animated fadeIn");
    $(".contactHeading").addClass("animated fadeIn");
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

$(document).ready(main);
