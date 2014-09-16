jQuery(document).ready(function(){ 
	
	/* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */

	// Logo
	var $logo 	= $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
	// Show logo 
	$('.menu .tabs a').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
	});	

	/* ---------------------------------------------------------------------- */
	/*	Resume
	/* ---------------------------------------------------------------------- */
	
	// Rating bars
	$(".skills li .rating").each(function(index,e) { 

		// Vars
		var 
			$ratNum = 7,
			$rat = $(e).attr("data-rat"),
			$point = "<span></span>";

		// Append points
		while($ratNum > 0){
		     $(e).append($point);
		     $ratNum--;
		}

		$(e).find("span").each(function(index,e) { 
			if(index >= $rat) return false;
			// Append Disabled Rats
			$(e).animate({
			    opacity: 1
			  });
		});

    });

	/* ---------------------------------------------------------------------- */
	/*	About
	/* ---------------------------------------------------------------------- */
	
	// Profile Photo Slider
	 $(".photo-inner ul").carouFredSel({
        direction           : "left",
 	    circular: true,
        auto    			: true,
        scroll 			: {
            items           : 1,
            fx 				: 'crossfade',
            duration        : 700,
            wipe    		: true
        },
	    swipe: {
	        onTouch: true
	    },
        items: {
            width: 153
        }           
    });
	 
	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */
	

    // Needed variables
    var $content = $("#content");
	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);

	// Menu Navigation
	 $(".menu .tabs").carouFredSel({
        responsive          : true,
        direction           : "left",
 	    circular: false,
    	infinite: false,
        pagination  		: "#menu-controls",  
        auto    			: false,
        scroll 			: {
            items           : 1,
            duration        : 300,                        
            wipe    : true
        },
		prev	: {	
			button	: "#menu-prev",
			key		: "right"
		},
		next	: { 
			button	: "#menu-next",
			key		: "left"
		},
	    swipe: {
	        onTouch: true
	    },
        items: {
            width: 140,
            visible: {
              min: 2,
              max: 7
            }
        }           
    });
	/* ---------------------------------------------------------------------- */
	/*	Cats Filter
	/* ---------------------------------------------------------------------- */ 
	
	var $catsfilter 		= $('.cats-filter');

	// Copy categories to item classes
	$catsfilter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});	

	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 
	
	// Needed variables
	var $plist	 	= $('#portfolio-list');
	var $pfilter 		= $('#portfolio-filter');
		
	// Run Isotope  
	$plist.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$pfilter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$plist.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	
	
	// Portfolio image animation 
	$plist.find('img').adipoli({
		'startEffect' 	: 'transparent',
		'hoverEffect' 	: 'boxRandom',
		'imageOpacity' 	: 0.6,
		'animSpeed' 	: 100,
	});
	
	/* ---------------------------------------------------------------------- */
	/*	prettyPhoto
	/* ---------------------------------------------------------------------- */

    $("a[rel^='portfolio']").prettyPhoto({
    	animation_speed: 'fast', /* fast/slow/normal */
    	social_tools: '',
    	theme: 'pp_default',
    	horizontal_padding: 5,
    });

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $contactform 	= $('#contactform'),
		$success		= 'Votre message a été envoyé. Merci!';
		
	$contactform.submit(function(){
		$.ajax({
		   type: "POST",
		   url: "/contact",
		   data: $(this).serialize(),
		   success: function(msg)
		   {
				if(msg == 'SEND'){
					response = '<div class="success">'+ $success +'</div>';
				}
				else{
					response = '<div class="error">'+ msg +'</div>';
				}
				// Hide any previous response text
				$(".error,.success").remove();
				// Show response message
				$contactform.prepend(response);
			}
		 });
		return false;
	});	
	/* ---------------------------------------------------------------------- */
	/*	Google Maps
	/* ---------------------------------------------------------------------- */

	var	$lat 				= '45.759723',
		$lon 				= '4.842223';

    var map;
    function initialize() {
        var positionLyon = new google.maps.LatLng($lat, $lon);
        var mapOptions = {
            zoom: 10,
            center: positionLyon,
            disableDefaultUI: true,
            draggable: false,
            scrollwheel: false
        };
        map = new google.maps.Map(
            document.getElementById('map'),
            mapOptions
        );
        var mapTexte = 'Sorina Dumoulin, Lyon';
        var marker = new google.maps.Marker({
            position: positionLyon,
            map: map,
            title: mapTexte
        });

        var infowindow = new google.maps.InfoWindow({
            content: mapTexte
        });
        infowindow.open(map,marker);

}
    google.maps.event.addDomListener(window, 'load', initialize);

	// Refresh Map
	$content.bind('easytabs:after', function(evt,tab,panel) {
        initialize();
  	});

      
  

});	
