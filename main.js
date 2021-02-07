/*
================================================================================
FUNCTION INIT
================================================================================
*/
/*function init() { */


/*
================================================================================
DISABLE SCROLL SCRIPT
================================================================================
*/
var Webflow = Webflow || [];
Webflow.push(function () {
    var $body = $(document.body);
    var scrollPosition = 0;

    $('[scroll="disable"]').on('click', function () {
        var oldWidth = $body.innerWidth();
        scrollPosition = window.pageYOffset;
        $body.css('overflow', 'hidden');
        $body.css('position', 'fixed');
        $body.css('top', `-${scrollPosition}px`);
        $body.width(oldWidth);
    });
    $('[scroll="enable"]').on('click', function () {
        if ($body.css('overflow') != 'hidden') { scrollPosition = window.pageYOffset; }
        $body.css('overflow', '');
        $body.css('position', '');
        $body.css('top', '');
        $body.width('');
        $(window).scrollTop(scrollPosition);
    });
    $('[scroll="both"]').on('click', function () {
        if ($body.css('overflow') !== 'hidden') {
            var oldWidth = $body.innerWidth();
            scrollPosition = window.pageYOffset;
            $body.css('overflow', 'hidden');
            $body.css('position', 'fixed');
            $body.css('top', `-${scrollPosition}px`);
            $body.width(oldWidth);
        } else {
            $body.css('overflow', '');
            $body.css('position', '');
            $body.css('top', '');
            $body.width('');
            $(window).scrollTop(scrollPosition);
        }
    });
});

/*
================================================================================
NEKA NEIDENTIFICIRANA SKRIPTA
================================================================================
*/
window.onload = function() {
    var anchors = document.getElementsByTagName('*');
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            code = this.getAttribute('whenClicked');
            eval(code);   
        }
    }
}

/*
================================================================================
NEKA NEIDENTIFICIRANA SKRIPTA 2
================================================================================
*/
function openNav() {
    $("#myNav").fadeIn();
    $("#open-nav").hide();
}

function closeNav() {
    $("#myNav").fadeOut();
    $("#open-nav").show();
}

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
  
/*
================================================================================
REFRESH PAGE ON SCREEN ROTATE
================================================================================
*/

jQuery(document).ready(function($){
orientationChange();
});
function orientationChange() {
if(window.addEventListener) {
window.addEventListener("orientationchange", function() {
location.reload();
});
}
}


  

/*
================================================================================
SWIPER SINGLE PAGE
================================================================================
*/
  var galSwiper = new Swiper ('.swiper-container-gal', {
    loop: true,
         speed: 1000,
    // spaceBetween: 100,
    // initialSlide: 0,
     //truewrapper adoptsheight of active slide
     //autoHeight: false,
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
  
      navigation: {
         nextEl: '.swiper-button-p',
         prevEl: '.swiper-button-n',
       },
 
     
     // And if we need scrollbar
     //scrollbar: '.swiper-scrollbar',
     // "slide", "fade", "cube", "coverflow" or "flip"
     effect: 'fade',
     
       
     // Distance between slides in px.
   //  spaceBetween: 60,
     //
     slidesPerView: 1,
     //
    // centeredSlides: true,
     //
    // slidesOffsetBefore: 0,
     //
    // grabCursor: true,
 
   })        
 
}
/*
window.addEventListener('load', function() {
    console.log("PAGE LOADED");
	init();
});
*/





 

