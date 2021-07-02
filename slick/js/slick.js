$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		autoplay:true,
		centerMode: true,
		centerPadding: '120px',
		vertical: false,
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
		autoplay:true,
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


