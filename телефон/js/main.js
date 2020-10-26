	$('.manu__btn').on('click', function(){
			$('ul.menu__list').slideToggle();

		});
		function slowScroll(id) {
		$('html,body').animate({
				scrollTop: $(id).offset().top
		}, 700)	;
		}
        
     