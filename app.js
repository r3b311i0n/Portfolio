var main = function () {
    $(".navhead>li").addClass("animated bounceInDown");

    $(".logo").addClass("animated fadeIn");

    $(".about p").addClass("animated bounceInLeft");
    $(".about img").addClass("animated bounceInRight");
};

var _pulseAnim = function (obj) {
    $(obj).addClass("animated infinite");
};

var _stopAnim = function (obj) {
    $(obj).removeClass("animated infinite");
};

var _about = function (obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");

    scrollToBegin();
};

var _portfolio = function (obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");
};

var _contact = function (obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");
};

var scrollToBegin = function () {
    $("html, body").animate({
        scrollTop: $("#top").offset().top
    }, 300);
};

$(document).ready(main);
