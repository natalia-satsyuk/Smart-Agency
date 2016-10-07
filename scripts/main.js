// slide-menu

$(".toggle-button").click(function() {
	$("nav").fadeToggle(400);
});


// active-class

$(".choose-active").click(function() {
	 $(this).parents().find(".active").removeClass("active");
	 $(this).addClass("active");
});


// slider


var slideOptions = {
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true
};

if ($(document).width() <= 480){
	slideOptions.slidesToShow = 1
}

var sl = $(".clients-slider-wrap").slick(slideOptions);

$(window).resize(function() {
	if ($(this).width() > 480){
		$(".clients-slider-wrap").slick("slickSetOption", "slidesToShow", 2);
	} else {
		$(".clients-slider-wrap").slick("slickSetOption", "slidesToShow", 1);
	}
});

