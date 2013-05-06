	

	jQuery( function($) {
		
		/* These will conatain sign-up & sign-in modal HTML */
		var __signUp = "",
		    __signin = "";

		/* I turn off IE8's Opacity Filter */
		$.cssHooks.opacity = {};

		/* Get the two modals as HTML */
		$.get("sign-up.html", function(data){
			__signUp = data;
			$.get("sign-in.html", function(data){
				__signIn = data;
				addClickListeners();
			});
		});

		/* Add click listeners which trigger modals */
		function addClickListeners() {
			$('.sign-in button, a[href="#sign-in"]').click( doSignIn );
			$('a[href="#sign-up"]').click( doSignUp );
		}

		/* Add click listeners which close modals */
		function addDieListeners() {
			$('.modal, .modal img[src*="close"]').click( doDie );
			$('.modal a[href="#sign-up"]').click( switchToSignUp );
			$('.modal a[href="#sign-in"]').click( switchToSignIn );
		}
		
		function switchToSignUp(e){
			dieModal(e);
			setTimeout( function(){
				doSignUp(e);
			}, 1000 );
		}

		function switchToSignIn(e){
			dieModal(e);
			setTimeout( function(){
				doSignIn(e);
			}, 1000 );
		}

		/* Sign-in Click Handler */
		function doSignIn (e) {
			$("html").append(__signIn); /* This is VERY non-standard, but I've made a living on this. */
			doModal();
		}

		function doSignUp (e) {
			$("html").append(__signUp); /* I do this to perform CSS3 transforms on the body tag when the modal is activated. */
			doModal();  /* It works in all browsers IE8+. */
		}
		
		function doDie (e) {
		
			if(e.target != this) {
				return false;
			}

			dieModal();
		}

		
		function doModal(){
				
			/* Small-screens only */
			if( window.innerWidth < 321 ) {
				window.scrollTo(0, 1); 	
			} else {
				$("html").css({"overflow-y":"hidden"});	
			}
			
			/* Show Modal BG */
			setTimeout( function() {
				$(".modal").css({"opacity":"1"});
			}, 1 ); // "Threaded" JS animation;
			
			setTimeout( function() {
				showModalBox();
			}, 300 );

			/* Die Listeners: */
			addDieListeners();
		}

		function dieModal(){
			
			window.location.hash = '';
			$("html").css({"overflow-y":"scroll"});

			hideModalBox();

			setTimeout( function() {
				$(".modal").css({"opacity":"0"});
				setTimeout( function() {
					$(".modal").remove();
				}, 500 );
			}, 300 );
		}

		function showModalBox() {
			$(".modal .box").css({
				"-moz-transform":"scale(1)",
				"-webkit-transform":"scale(1)",
				"-o-transform":"scale(1)",
				"transform":"scale(1)",
				"opacity":"1"
			});
		}

		function hideModalBox() {
			$(".modal .box").css({
				"-moz-transform":"scale(.8)",
				"-webkit-transform":"scale(.8)",
				"-o-transform":"scale(.8)",
				"transform":"scale(.8)",
				"opacity":"0"
			});
		}
	});