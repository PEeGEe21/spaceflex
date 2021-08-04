

var fullHeight = function() {

  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function(){
    $('.js-fullheight').css('height', $(window).height());
  });

};
fullHeight();


$(document).ready(function(){
    $('.your-class').slick({
        animateIn: 'flipInX',
        animateOut: 'slideOutDown',
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease',
        prevArrow: `<button type="button" class="slick-prev"><i class="la la-long-arrow-left"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class="la la-long-arrow-right"></i></button>`,
        
    });
    
    jQuery(document).ready(function($) {
      $('.fadeOut').owlCarousel({
        items: 4,
        
        //animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 8000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        dots: false,
responsive:{
            0:{
                items:2
            },
            650:{
                items:3
            },			
            1024:{
                items:4
            },
            1200:{
                items:4
            }
        }
      });
    });
    
    
    jQuery('.testimonial-carousel').owlCarousel({
    	loop:true,
    	autoplay:true,
    	margin:30,
    	nav:true,
    	dots:true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      // autoplayTimeout: 5000,
      // smartSpeed: 800,
    	responsiveClass: true,
    	responsive:{
    		0:{
    			items:1
    		},
    		480:{
    			items:1
    		},			
    		1024:{
    			items:2
    		},
    		1200:{
    			items:2
    		}
    	}
    });

});


			var btn = $('#button');

            $(window).scroll(function () {
                if ($(window).scrollTop() > 900) {
                    btn.addClass('show').fadeIn(2000);
                }else{
                	
                    btn.removeClass('show').fadeOut(2000);
                    
                }
            });
            
            /*
            jQuery(window).on("scroll", function() {
            var scrollWindowHeight = jQuery(window).scrollTop();
            if (scrollWindowHeight > 900) {
            jQuery("button.back-to-top").slideDown(1000).fadeIn(1000);
            } else {
            jQuery("button.back-to-top").slideUp(1000).fadeOut(1000);
            }
            });
*/
            btn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({scrollTop:0}, '800');
            });
            
            	$(window).on("load", function() {
            
					setTimeout(function(){
						jQuery('.spinner-wrapper').remove();
					}, 1500);

				});
				
				
				jQuery(window).on("load", function(e){
				//if(!checkSelectorExistence('.counter')){return;}
				jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
				});	
				
				$('.counter').addClass('animated fadeInDownBig');
				$('h3').addClass('animated fadeIn');
				
				
				});

/*
$(document).ready(function() {
$('.progress-bar').waypoint(function() {
$('.progress-bar').css({
animation: "animate-positive 2s",
opacity: "1"
});
}, { offset: '75%' });
});


$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


*/