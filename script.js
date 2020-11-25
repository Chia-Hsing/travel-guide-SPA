$(document).ready(() => {
    $('#navbar-toggler').click(() => {
        $('.navbar-collapse').slideToggle(400)
    })

    $(window).scroll(() => {
        let pos = $(window).scrollTop()

        if (pos >= 100) {
            $('.navbar').addClass('trans-navbar')
        } else {
            $('.navbar').removeClass('trans-navbar')
        }
    })
})
