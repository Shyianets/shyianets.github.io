$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});