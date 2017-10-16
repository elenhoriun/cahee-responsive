;(function($){

	$(document).ready(function(){
		$('#mobile-btn').on('click', function(){
			
			var $nav = $('.ba-header__nav');
			$nav.toggle();

			if ($nav.is(":visible")) {
				$('body').css('overflow', 'hidden');  //отключаем скролл, если меню открыто
			} else {
				$('body').css('overflow', 'scroll');
			}
			
		});

		$('.ba-header__link').on('click', function(){
			$('.ba-header__nav').hide();
			$('body').css('overflow', 'scroll');
			$('.ba-header__mobile-overlay').fadeIn();

		})

		$(window).on('resize', function(){
			
			if ($(this).width() >= 768) {
				$('body').css('overflow', 'scroll'); //добавляем скролл при увеличении экрана
			}
		});


		$(window).on('scroll', function(){
		
			if ($(this).scrollTop() > $(this).height()) {
				$('.ba-header__mobile-overlay').fadeIn(); 
			} else {
				$('.ba-header__mobile-overlay').fadeOut(); 
			}
		});

	});

})(jQuery);