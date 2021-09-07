$(document).ready(function() {

	// SANDWICH ANIMATION
	$(".toggle_menu").click(function() {
		$(".toggle_menu").toggleClass("active");
		$(".nav_block").toggleClass("active");
	});

	$(".nav_block .main_nav li a").click(function() {
		$(".toggle_menu").removeClass("active");
		$(".nav_block").removeClass("active");
	});


	// SCROLL TO ID
	$(".main_header .nav_block .main_nav li a[href*='#'], .mouse_icon a[href*='#'], .to_top[href*='#']").mPageScroll2id({
		scrollSpeed: 500,
		offset: 0
	});


	// FANCYBOX
	$().fancybox({
		selector: '.fancybox',
		loop: true,
		infobar: true,
		animationEffect: "zoom"
	});


	// PHONE INPUT MASK
	$(function(){
		$("input[name='tel']").mask("+7 (999) 999 99 99");
	});


	// WORKS
	var workswiper = new Swiper('.work_slider', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		spaceBetween: 5,
	});


	// SLIDE TO TOP
	$(window).scroll(function () {
		if($(window).width() < 992) {
			if ($(this).scrollTop() > 1200) {
				$('#to_top').fadeIn();
			} else {
				$('#to_top').fadeOut();
			}
		}
	});





	// SEND FORM
	$('.main_form').each(function() {
		$(this).validate({
			rules:{
				name:{
					required: true,
				},
				tel: {
					required: true,
					minlength: 6,
				},
				email: {
					required: true,
					email: true
				},
			},
			messages:{
				name:{
					required: "Поле не заполнено"
				},
				tel:{
					required: "Поле не заполнено",
					minlength: "Мало символов"
				},
				email:{
					required: "Поле не заполнено",
					email: "Введен некорректный email"
				},
			},
			submitHandler: function(form) {
				$.ajax({
					url: "php/submit.php",
					type: "POST",
					data: $(form).serialize(),
					success: function(response) {
						$(form).trigger('reset');
						$(".modal").modal("hide");
						setTimeout(function(){$('#thanks_modal').modal("show")}, 500); 
					}            
				});
			}
		});
	});



});


