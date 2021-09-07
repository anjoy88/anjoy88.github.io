$(document).ready(function() {

	// FIXED HEADER
	var firstBlockHeight = $("#fixed_check").height()
	jQuery(function($) {
		$(window).scroll(function(){
			if ($(window).width() > 991) {
				if($(this).scrollTop()>firstBlockHeight + 100){
					$('.main_header').addClass('fixed');
				} else if ($(this).scrollTop()<firstBlockHeight + 100){
					$('.main_header').removeClass('fixed');
				}
			} else {
				if($(this).scrollTop()>firstBlockHeight + 0){
					$('.main_header').addClass('fixed');
				} else if ($(this).scrollTop()<firstBlockHeight + 0){
					$('.main_header').removeClass('fixed');
				}
			}
		});
	});


	// REVIEWS SLIDER
	var reviewsSwiper = new Swiper('.reviews_swiper', {
		nextButton: '.reviews_next',
		prevButton: '.reviews_prev',
		spaceBetween: 30,
		loop: true,
		autoHeight: true, //enable auto height
	});


	// FANCYBOX
	$().fancybox({
		selector: '.fancybox',
		loop: true,
		infobar : true,
		animationEffect : "zoom"
	});


	// SELECT STYLE
	(function($) {
		$(function() {
			$('select').styler({
			});
		});
	})(jQuery);


	// SCROLLBAR
	(function($){
		$(window).load(function(){
			$(".jq-selectbox .jq-selectbox__dropdown ul").mCustomScrollbar({
				theme:"rounded-dark"
			});
		});
	})(jQuery);


	// TEL INPUT
	$( ".tel_input" ).change(function () {
		if ($(this).val().length != 0){
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});


	// SCROLL TO ID
	$(".navbar-nav li a[href*='#']").mPageScroll2id();


	// GALLERY SLIDER
	var reviewsSwiper = new Swiper('.gallery_swiper', {
		nextButton: '.gallery_next',
		prevButton: '.gallery_prev',
		spaceBetween: 35,
		loop: true,
		slidesPerView: 2,
		autoHeight: true, //enable auto height
		breakpoints: {
			767: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 30
			}
		}
	});


	// READ MORE (ARTICLE)
	$("#read_more").click(function() {
		$('.item_text .hidden_text').slideToggle();
		($("#read_more").text() === "Скрыть") ? $("#read_more").text("Читать дальше") : $("#read_more").text("Скрыть");
	});


	// SEND FORM
	$("#discount_form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
		e.preventDefault();
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
			type: "POST", //Метод отправки
			url: "send.php", //путь до php фаила отправителя
			data: form_data,
			success: function() {
				$("#discount_form").trigger('reset');
				setTimeout(function(){window.location.href = "thanks.html"}, 500); 
			}
		});
	});


	// SEND FORM
	$("#main_form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
		e.preventDefault();
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
			type: "POST", //Метод отправки
			url: "send2.php", //путь до php фаила отправителя
			data: form_data,
			success: function() {
				$("#main_form").trigger('reset');
				setTimeout(function(){window.location.href = "thanks.html"}, 500); 
			}
		});
	});


	// SEND FORM
	$("#motor_search, #modal_motor_form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
		e.preventDefault();
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
			type: "POST", //Метод отправки
			url: "send3.php", //путь до php фаила отправителя
			data: form_data,
			success: function() {
				$("#motor_search, #modal_motor_form").trigger('reset');
				setTimeout(function(){window.location.href = "thanks.html"}, 500); 
			}
		});
	});


	// SEND FORM
	$("#download_form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
		e.preventDefault();
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
			type: "POST", //Метод отправки
			url: "send4.php", //путь до php фаила отправителя
			data: form_data,
			success: function() {
				$("#download_form").trigger('reset');
				setTimeout(function(){window.location.href = "thanks.html"}, 500); 
			}
		});
	});


	// SEND FORM
	$("#question_form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
		e.preventDefault();
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
			type: "POST", //Метод отправки
			url: "send5.php", //путь до php фаила отправителя
			data: form_data,
			success: function() {
				$("#question_form").trigger('reset');
				setTimeout(function(){window.location.href = "thanks.html"}, 500); 
			}
		});
	});

});


