$(document).ready(function() {
    $('.tool-tip-right').on('click', function() {
        $(this).toggleClass('tool-tip-active');
    });
    $('.tool-tip__close').on('click', function() {
        $(this).parent().removeClass('tool-tip-active');
    });
});