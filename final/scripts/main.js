window.onload = init;

function init () {

// hamburger menu
$('.ham').click(function(){
	$('.mobile-nav').slideToggle(500);
});

// slideshow
if($('.image-gallery').length> 0 ) {

		slider_init();
	}

// form
if($('#htmlForm').length > 0 ) {

		validation_init();
	}

}