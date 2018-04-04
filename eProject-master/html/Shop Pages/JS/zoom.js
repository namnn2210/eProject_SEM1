$("#zoom_09").elevateZoom({
            gallery : "gallery_09",
            galleryActiveClass: "active"
    	  		}); 
            
  
     $("#select1").change(function(e){
   var currentValue = $("#select1").val();
   if(currentValue == 1){    
   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image1.png';
   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image1.jpg';
   }
   if(currentValue == 2){    
   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image2.png';
   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image2.jpg';
   }
   if(currentValue == 3){    
   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image3.png';
   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image3.jpg';
   }
   if(currentValue == 4){    
   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image4.png';
   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image4.jpg';
   }
	// Example of using Active Gallery
  $('#gallery_09 a').removeClass('active').eq(currentValue-1).addClass('active');		
 
 
 	 var ez =   $('#zoom_09').data('elevateZoom');	  
   
  ez.swaptheimage(smallImage, largeImage); 
     
    });