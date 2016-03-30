(function($) {
	var sw = {
		'init' : function() {
			sw.setup();
		},
		'setup' : function() {
			$(".startup__mask h1").fitText(0.7);
			console.log("<3 <3 <3 <3");
			console.log("<3 u");
			console.log("--tech@NYU");

			$('#filters').on( 'click', 'button', function() {
				var $container = $(".list__events");
				var filterValue = $(this).attr('data-filter');
  				$container.isotope({ filter: filterValue });
			});

		}
	};

	$('.owl-carousel').owlCarousel({
	    center: false,
	    items: 1,
	    loop: false,
	    margin: 20,
	    responsive: {
	        400: {
	            items: 1
	        }
	    },
	    autoHeight: true,
	    autoplay: true,
	    autoplayTimeout: 6000,
	    autoplayHoverPause: true
	});
	
	sw.init();
}(jQuery));