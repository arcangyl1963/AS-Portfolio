
$(document).ready (function () {
    var stickyNavTop = $('.topnav').offset().top;
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.topnav').addClass('sticky');
        } else {
            $('.topnav').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
    $('#btnJS').click(function(event){
        $('#jscript').toggle();
    });
    $('#btnHC').click(function(event){
        $('#htmlCSS').toggle();
    });
    $('#btnProj').click(function(event){
        $('#projects').toggle();
    });
    $('#aboutBtn').click(function () {
        $('#bio').show();
        $('#work').hide();
        $(this).css('background-color', '#101d94');
        $('#workBtn').css('background-color', '');
        $('#contactBtn').css('background-color', '');
        $('#resumeBtn').css('background-color', '');
    });
    $('#workBtn').click(function () {
        $('#bio').hide();
        $('#work').show();
       $(this).css('background-color', '#101d94');
        $('#aboutBtn').css('background-color', '');
        $('#contactBtn').css('background-color', '');
        $('#resumeBtn').css('background-color', '');
    });
    $('#contactBtn').click(function () {
        $('#bio').hide();
        $('#work').show();
       $(this).css('background-color', '#101d94');
        $('#aboutBtn').css('background-color', '');
        $('#workBtn').css('background-color', '');
        $('#resumeBtn').css('background-color', '');
    });
    $('#resumeBtn').click(function () {
        $('#bio').hide();
        $('#work').show();
       $(this).css('background-color', '#101d94');
        $('#aboutBtn').css('background-color', '');
        $('#workBtn').css('background-color', '');
        $('#contactBtn').css('background-color', '');
    });
})

   