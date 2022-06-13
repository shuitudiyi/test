// banner
$(document).ready(function() {
$('#owl-banner').owlCarousel({
items: 1,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause: true,
autoHeight: true,
loop: true,
nav: true,
animateOut: 'slideOutDown',
animateIn: 'flipInX',
});
});
// kehu
$(document).ready(function() {
$('#owl-kehu').owlCarousel({
loop:true,
margin:15,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
dots:false,
responsive:{
319:{ items:1},
375:{items:2},
768:{items:4},
1024:{ items:5},
1200:{items:6}
}
});
});