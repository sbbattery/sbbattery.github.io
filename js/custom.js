$(function(){$(".nav-link").on("click",function(){$(".navbar-collapse").collapse("hide")}),AOS.init({disable:"mobile",duration:800,anchorPlacement:"center-bottom"}),$(function(){$(".nav-link").on("click",function(e){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top-0},1e3),e.preventDefault()})}),$("#project-slide").owlCarousel({loop:!0,center:!0,autoplayHoverPause:!1,autoplay:!0,margin:30,responsiveClass:!0,responsive:{0:{items:1},768:{items:2}}})});
