// JavaScript Document

var owl = $('.carousel2');
	owl.owlCarousel({
		item:4,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true
	});
	$('.play').on('click',function(){
		    owl.trigger('play.owl.autoplay',[1000])
		})
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
		})