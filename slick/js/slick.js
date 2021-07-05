$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		slidesToScroll: 2,
		centerMode: true,
		vertical: false,
		initialSlide: 1,
		asNavFor: ".comment-slider",
	/*	responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		] */
	});

	$('.comment-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		vertical: false,
		asNavFor: ".slider",
	/*	responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		] */
	});
	
});


