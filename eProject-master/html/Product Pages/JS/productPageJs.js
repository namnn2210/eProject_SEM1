// JavaScript Document
jQuery(function($) {
$('.navbar .dropdown').hover(function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

}, function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

});

$('.navbar .dropdown > a').click(function(){
location.href = this.href;
});

});

var clicks = 0;
function cart(){
	var incart = document.getElementById("inCart").value;
	clicks += +incart;
	document.getElementById("clicks").innerHTML = clicks;
}
