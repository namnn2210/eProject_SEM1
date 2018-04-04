// JavaScript Document
$(document).ready(function(e){
		var product=[
		  {
			  value: "../Product Pages/Product - Hair1.html",
			  label: "Hair 1"
		  },
			{
			  value: "../Product Pages/Product - Hair2.html",
			  label: "Hair 2"
		  },
			{
			  value: "../Product Pages/Product - Hair3.html",
			  label: "Hair 3"
		  },
		  {
			  value: "../Product Pages/Product - Skin1.html",
			  label: "Skin 1"
		  },
			{
			  value: "../Product Pages/Product - Skin1.html",
			  label: "Skin 2"
		  },
			{
			  value: "../Product Pages/Product - Skin1.html",
			  label: "Skin 3"
		  },
		  {
			  value: "../Product Pages/Product - Makeup1.html",
			  label: "Makeup Kit 1"
		  },
			{
			  value: "../Product Pages/Product - Makeup2.html",
			  label: "Makeup Kit 2"
		  },
			{
			  value: "../Product Pages/Product - Makeup3.html",
			  label: "Makeup Kit 3"
		  },
		  {
			  value: "../Product Pages/Product - Paint1.html",
			  label: "Nail Paint 1"
		  },
			{
			  value: "../Product Pages/Product - Paint2.html",
			  label: "Nail Paint 2"
		  },
			{
			  value: "../Product Pages/Product - Paint3.html",
			  label: "Nail Paint 3"
		  },
		  {
			  value: "../Product Pages/Product - Nailkits1.html",
			  label: "Nail Art 1"
		  },
			{
			  value: "../Product Pages/Product - Nailkits2.html",
			  label: "Nail Art 2"
		  },
			{
			  value: "../Product Pages/Product - Nailkits3.html",
			  label: "Nail Art 3"
		  },
		  {
			  value: "../Product Pages/Product - Jewell1.html",
			  label: "Jewellry 1"
		  },
			{
			  value: "../Product Pages/Product - Jewell2.html",
			  label: "Jewellry 2"
		  },
			{
			  value: "../Product Pages/Product - Jewell3.html",
			  label: "Jewellry 3"
		  },
		  {
			  value: "../Product Pages/Product - Wedding1.html",
			  label: "Wedding Kit 1"
		  },
			{
			  value: "../Product Pages/Product - Wedding1.html",
			  label: "Wedding Kit 2"
		  },
			{
			  value: "../Product Pages/Product - Wedding1.html",
			  label: "Wedding Kit 3"
		  },
	  ];
	  $(document).ready(function(){
		  $("#search").autocomplete({
			  source: product,
			  select: function(event, ui){
				  window.location.href = ui.item.value;
				  this.value = "";
    			  return false;
			  }
		  });
	  });
	});

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