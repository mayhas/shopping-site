/* global $*/

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,  // デザインが変えられる？
            items: 1,
            autoplay: true
        }
    );
});
