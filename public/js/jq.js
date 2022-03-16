$(document).ready(function() {
    $('.open').on('click' , function() {
        $('.chat-sidebar ').css('left' , '0%')
    })
    $('.close').on('click' , function() {
        $('.chat-sidebar ').css('left' , '-100%')
    })
})