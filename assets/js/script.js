$(document).ready (function () {
    $('#btnJS').click(function(event){
        console.log('I was clicked');
        $('#jscript').toggle();
    });
    $('#aboutBtn').click(function () {
        $('#bio').toggle();
        $('#work').toggle();
    });
})

   