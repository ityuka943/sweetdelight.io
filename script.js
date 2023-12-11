$(function(){
    $("#toggle").on("click", function() {
        $(".toggle-list").slideToggle();
    });
});

$(function () {
    $("#js-pagetop").click(function () {
        $('html, body').animate({
    scrollTop: 0
}, 300);
});
$(window).scroll(function () {
if ($(window).scrollTop() > 1) {
    $('#js-pagetop').fadeIn(300).css('display', 'flex')
} else {
    $('#js-pagetop').fadeOut(300)
}
});
});

$(function(){
    $("#menu img").click(function() {
    $("#graydisplay").html($(this).prop('outerHTML'));
    $("#graydisplay").fadeIn(300);
    });
    $("#graydisplay, #graydisplay img").click(function() {
    $("#graydisplay").fadeOut(300);
    });
});
