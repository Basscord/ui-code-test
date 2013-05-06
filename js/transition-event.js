		/*
		$("body").on(__myTransitionEnd,function(){	
			$("body").off(__myTransitionEnd);
		});
		*/
		var __myTransitionEnd = function(){

			var t;
			var el = document.createElement('fakeelement');
			var transitions = {
				'transition':'transitionend',
				'OTransition':'oTransitionEnd',
				'MozTransition':'transitionend',
				'WebkitTransition':'webkitTransitionEnd'
			}

			for(t in transitions){
				if( el.style[t] !== undefined ){
					return transitions[t];
				}
			}
		}();