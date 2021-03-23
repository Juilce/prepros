$(document).ready(function(){
	$(".intro__down").on("click","a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(function() {
	let tab = $('.tabs .plot > div'); 
	tab.hide().filter(':first').show(); 
	
	$('.tabs .tabs__nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs .tabs__nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	$('.tabs__target').click(function(){
		$('.tabs .tabs__nav a[href=' + $(this).data('id')+ ']').click();
	});
});

$('.products__slider').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  adaptiveHeight: true,
  
    arrows: true,
	    prevArrow: '<a class="slick-next-one"><i class="fas fa-long-arrow-alt-right"></i></a>',
    nextArrow: '<a class="slick-prev-one"><i class="fas fa-long-arrow-alt-left"></i></a>',
    responsive: [
      {
        breakpoint: 988,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(window).scroll(function(){
	if ($(this).scrollTop() > 140 && screen.width >= 979) {
		$('.nav__list').css({
			"background-color": "rgb(110, 119, 74, 0.8)",
			"position": "fixed",
			"width": "100%",
			"color": "rgb(0,0,0)",
			"margin-top": "0px",
			"padding": "20px",
			"index": "999",
		});
	}
	else if ($(this).scrollTop() < 140) {
		$('.nav__list').css({
			"background-color": "",
			"position": "",
			"width": "",
			"margin-top": "",
			"padding": "",
		});
	}
});


$('.testimonials__slider').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
	prevArrow: '<a class="slick-next-two"><i class="fas fa-long-arrow-alt-right"></i></a>',
    nextArrow: '<a class="slick-prev-two"><i class="fas fa-long-arrow-alt-left"></i></a>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });
  $(document).ready(function(){
	$('.nav')
		.addClass('original')
		.clone()
		.insertAfter('.nav')
		.addClass('cloned')
		.removeClass('original');
 
	function resizeMenu(){
		var $original = $('.nav.original');
		var $cloned = $('.nav.cloned');
		
		if ($(window).scrollTop() >= ($original.offset().top)){    
			$cloned.css({
				'top': 0, 
				'width': $original.css('width'), 
				'display': 'block',
				'left': $original.offset().left+'px'
			});
			$original.css('visibility', 'hidden');
		} else {
			$cloned.css('display', 'none');
			$original.css('visibility', 'visible');
		}
	}
 
	$(window).scroll(function(){
		resizeMenu();
	});
 
	$(window).resize(function(){
		resizeMenu();	
	});
 
	var last_id;
	var $top_menu = $('.nav.cloned');
	var menu_height = $top_menu.outerHeight(true);
	var $menu_items = $top_menu.find('a');
	var $scroll_items = $menu_items.map(function(){
		var item = $($(this).attr('href'));
		if (item.length){
			return item;
		}
	});
 
	$menu_items.click(function(e){
		var href = $(this).attr('href'),
		offset_top = href === '#' ? 0 : $(href).offset().top - menu_height;
		$('html, body').stop().animate({
			scrollTop: offset_top
		}, 300);
		e.preventDefault();
	});
 
	$(window).scroll(function(){
		var from_top = $(this).scrollTop() + menu_height;
		var mar = parseInt($top_menu.css('margin-bottom'));
		var cur = $scroll_items.map(function(){
			if ($(this).offset().top < from_top + mar){
				return this;
			}
		});
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : '';
		if (last_id !== id){
			last_id = id;
			$menu_items.parent()
				.removeClass('active')
				.end()
				.filter("[href='#" + id + "']")
				.parent()
				.addClass('active');
		}
	});
});

$(function() {

	$('.active__item .accordion__content').slideDown();
  
	$('#accordion .accordion__title').on('click', function(){
	  $('#accordion .accordion__content').not( $(this).next() ).slideUp(299);
  
	  $('.accordion__item').removeClass('active__item');
	  $(this).next().slideDown(299).parent().addClass('active__item');
	});
  
  });


$(document).ready(function(){
	$('form').submit(function(){
		$(this).find('input[type=submit], button[type=submit]').prop('disabled', true);
	});
});


$(function() {
	var $menu_popup = $('.menu-popup');
 
	$(".menu-triger").click(function(){
		$('body').addClass('body_pointer');		
		$menu_popup.show(0);
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300, 
			function(){
				$menu_popup.hide(0);
			}
		);
		return false;
	});	
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu-popup').length){
			$('body').removeClass('body_pointer');
			$menu_popup.animate(
				{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
				300, 
				function(){
					$menu_popup.hide(0);
				}
			);
		}
	});
});