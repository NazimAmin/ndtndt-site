$(document).ready(function () {
    setTimeout(function () {
        $('#ndt2').css({
            "visibility": "visible"
        }).toggleClass('ndt2');
    }, 2000);
});
$(window).resize(function () {
    if (document.documentElement.clientWidth <= 620) {
        $('.col-xs-6').addClass('col-md-4').removeClass('col-xs-6');
    } else {
        $('.col-md-4').addClass('col-xs-6');
    }
}).resize();