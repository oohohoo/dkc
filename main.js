/*
================================================================================
FUNCTION INIT
================================================================================
*/
function init() {

/*
================================================================================
JQUERY NTH GRANDFADER - CHILD
================================================================================
*/

  $(function() {

    // Using Jquery $( "parent > child" ); selector which returns an array of matches  
    // Iterate through an array of Jquery objects using $(..).each()
    $('ul > li > ul > li').each(function(){
    
      console.log($(this).text());
      $(this).addClass('great-great-grandchild');
        
    });
    

    //This adds the class to all matches as well
    $('ul > li > a > ul > li > div ').addClass('great-great-grandchild');
    
    // element:first selector selects the first occurrence of a given element  
    console.log($('ul:first').attr("value")); //Returns the value attribute of the first <ul> element
    
    // element:nth-child(n) selector selects the nth occurrence of a given element
    console.log($('ul:nth-child(1)').attr("value"));
    console.log($('ul:nth-child(2)').attr("value"));
    
    // $(parent).children() returns all DIRECT children
    console.log($('ul:nth-child(1)').children().attr("value"));
    console.log($('ul:nth-child(2)').children().attr("value"));
    
    //Iterate through 2nd list grandchildren
    $('ul:nth-child(2)').children().children().each(function (){
    
      console.log($(this).attr("value"));
    
    });
    
    //Let's use this to establish a hierarchy for your unordered lists
    console.log(" ");
    console.log("Creating Hierarchy:");
    console.log(" ");
    CreateListHierarchy();
    
  });
  
  function CreateListHierarchy() {
      
    $('div > ul').each(function(index) {
    
       let listNumber = index + 1;
       
       $(this).addClass('list' + listNumber); //Adds classes list1 and list2 to ul-1 and 2
       console.log('Class: ' + 'list' + listNumber + ' added to: ' + $(this).attr("value"));
       
       AllocateClassNames(this, listNumber);       
    
    });
  
  }
  
  function AllocateClassNames(parent, parentNumber) {
   
    $(parent).children().each(function(index) {
    
      let classIndex = index + 1;
   
      $(this).addClass('list' + parentNumber + '' + classIndex);
      
      console.log('Class: ' + 'list' + parentNumber + '' + classIndex + ' added to: ' + 
      $(this).attr("value"));
  
      //Check if this element has children, re-run the loop if it does
      if(!!$(this).children().length) { 
      
          AllocateClassNames(this, parentNumber + '' + classIndex);
          
      }
    
    });
  
  } 


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
Add onClick attribute to any element
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

window.addEventListener('load', function() {
    console.log("PAGE LOADED");
	init();
});






 

