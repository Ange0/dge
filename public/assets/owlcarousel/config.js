/* ---------------------------------------------------------------------- */
/*	Theme Settings														  */
/* ---------------------------------------------------------------------- */

	var CONFIG = (function ($, window) {
		
		return {

            objOwlSlider_photo: {
				items: 3,					// Quantity of items to show 
				autoplay : true,			// Boolean: (true/false)
				autoplayTimeout: 5000,		// Timeout in ms
				smartSpeed: 500,			// Slide speed in ms
                navigation: true,			// Boolean: (true/false)
                rewindNav: true,			// Boolean: (true/false) - cycle slider
                loop: true,					// Boolean: (true/false). Inifnity loop
				theme: "carousel-theme",
				dots: false,				// Boolean: (true/false). Show dots navigation
				nav: true,					// Boolean: (true/false). Show next/prev buttons
				responsive:{
					320: {
					   items:1
					},
					480: {
					   items: 2
					},	
				    769:{
				      items:3
				    },
				    1199:{
				      items:3
				    }
				}
            },


            objOwlSlider_une: {
				items: 3,					// Quantity of items to show 
				autoplay : true,			// Boolean: (true/false)
				autoplayTimeout: 10000,		// Timeout in ms
				smartSpeed: 700,			// Slide speed in ms
                navigation: false,			// Boolean: (true/false)
                rewindNav: true,			// Boolean: (true/false) - cycle slider
                loop: true,					// Boolean: (true/false). Inifnity loop
				theme: "carousel-theme",
				dots: false,				// Boolean: (true/false). Show dots navigation
				nav: false,					// Boolean: (true/false). Show next/prev buttons
				responsive:{
					320: {
					   items:2
					},
					480: {
					   items: 2
					},	
				    769:{
				      items:3
				    },
				    1199:{
				      items:3
				    }
				}
            },

            objOwlSlider_partner : {
				items: 3,					// Quantity of items to show 
				autoplay : true,			// Boolean: (true/false)
				autoplayTimeout: 5000,		// Timeout in ms
				smartSpeed: 500,			// Slide speed in ms
                navigation: true,			// Boolean: (true/false)
                rewindNav: true,			// Boolean: (true/false) - cycle slider
                loop: true,					// Boolean: (true/false). Inifnity loop
				theme: "carousel-theme",
				dots: true,				// Boolean: (true/false). Show dots navigation
				nav: false,					// Boolean: (true/false). Show next/prev buttons
				responsive:{
					320: {
					   items:1
					},
					480: {
					   items: 2
					},	
				    769:{
				      items:3
				    },
				    1199:{
				      items:3
				    }
				}
            },

			
			/* ---------------------------------------------------- */
			/*	Preload									*/
			/* ---------------------------------------------------- */
			
			preload: {
				time: 300
			}

		}
		
            function getInfo(i){
		        var owlInfo = i,prop,value,name;
		        var current = ++i['currentPosition'];
		        var all = i['allItems'];

		        $('.currentPosition').text(current);
		        $('.allItems').text(all);

		    }
		
	}(jQuery, window));
		
/* ---------------------------------------------------------------------- */
/*	end Theme Settings													  */
/* ---------------------------------------------------------------------- */			
		