// on ready function
  $(document).ready(function() {
	"use strict";
	
	
    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });


	
	   $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 60;
			 if ($(window).scrollTop() > navHeight) {
				 $('.main-header').addClass('fixed');
			 }
			 else {
				 $('.main-header').removeClass('fixed');
			 }
		});
	});
	
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {       
			$('#return-to-top').fadeIn(200);   
		} else {
			$('#return-to-top').fadeOut(200);  
		}
	});
	$('#return-to-top').on('click',function() {     
		$('body,html').animate({
			scrollTop : 0                
		}, 500);
	});
	
	// Main Slider Animation

        (function($) {

            //Function to animate slider captions 
            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic,#carousel-example-generic2,#carousel-example-generic3,#carousel-example-generic4,#carousel-example-generic5,#carousel-example-generic6,#carousel-example-generic7'),
                $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

            //Initialize carousel 
            $myCarousel.carousel();

            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Pause carousel  
            $myCarousel.carousel('pause');


            //Other slides to be animated on carousel slide event 
            $myCarousel.on('click slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });


        })(jQuery);
		
		
	
	
	 $(document).ready(function() {
            $('.try_rc_slider_inner_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })

		
		
		$(document).ready(function() {
            $('.lr_index_bog_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                    0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
                }
            })
        })
		
		
		

	
	
});	