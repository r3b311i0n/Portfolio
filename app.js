var main = function() {
    $(".navhead>li").addClass("animated bounceInDown");

    $(".logo").addClass("animated fadeIn");

    $(".about p").addClass("animated bounceInLeft");
    $(".about img").addClass("animated bounceInRight");
};

var pulseAnim = function(obj) {
    $(obj).addClass("animated infinite");
};

var stopAnim = function(obj) {
    $(obj).removeClass("animated infinite");
};

var about = function(obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");
};

var portfolio = function(obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");
};

var contact = function(obj) {
    $(".navhead p").removeClass("animated infinite flash");
    $(obj).addClass("animated infinite flash");
};

$(document).ready(main);
