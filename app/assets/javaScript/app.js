$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection', 'eighthSection'],
        menu: '#menu',
        /*navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Main Section', 'Engage', 'Retarget', 'Retain', 'Why iZooto', 'Setup in Minutes', 'Our Customers Testimonials', 'iZooto Footer'],*/
        scrollingSpeed: 1000,
        scrollBar: true
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });
});
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 550 && y < 2450) {
        $('.engage-fixed-nav-wrapper').show();
    } else {
        $('.engage-fixed-nav-wrapper').hide();
    }
});

$(window).load(function(){
     $('.loader').fadeOut();
});
