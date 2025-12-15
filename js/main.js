var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            margin: 10
        },
        600:{
            items:3,
            margin: 15
        },
        1000:{
            items:3,
            margin: 20
        }
    }
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
});
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});




$(window).scroll(function() {
    if ($(window).scrollTop()) {
        $('#myNav').addClass('black');
    } else {
        $('#myNav').removeClass('black');
    }
});


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var goTopButton = document.getElementById("goTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopButton.classList.add("active");
    } else {
        goTopButton.classList.remove("active");
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}
