/*
================================================================================
FUNCTION INIT
================================================================================
*/
function init() {

/*
================================================================================
SWIPER HERO
================================================================================
*/

var menu = ['', '', '', '', '', '']  
  var mySwiper = new Swiper ('.swiper-container', {
   loop: true,
		speed: 1000,
   // spaceBetween: 100,
   // initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    updateOnWindowResize: true,
    // Optional parameters
  //  direction: 'vertical',
      // delay between transitions in ms
    	autoplay: {
				delay: 5000,
				disableOnInteraction: false,
},
   // autoplayStopOnLast: false, // loop false also
    // If we need pagination
 
    
    // Navigation arrows
 /*   nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',*/
    
    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'fade',
    
      pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'bullets',
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (menu[index]) + '</span>';
},
    // Distance between slides in px.
  //  spaceBetween: 60,
    //
    slidesPerView: 1,
    //
   // centeredSlides: true,
    //
   // slidesOffsetBefore: 0,
    //
    grabCursor: true,
  }
  })        


}

window.addEventListener('load', function() {
	init();
});

