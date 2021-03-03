/*
================================================================================
IMAGE ORIENTATION
================================================================================
*/
/*function init() {
*/

  $(".newsimgsizer").each(function(){
    var $this = $(this);
    if ($this.width() > $this.height()) {
        $this.addClass("horizontal");
   }
     else{
        $this.addClass("vertical");
    } 
});


$(".projectimgsizer").each(function(){
  var $this = $(this);
  if ($this.width() > $this.height()) {
      $this.addClass("horizontalx");
  }else{
      $this.addClass("verticalx");
  }
});


/*
================================================================================
100 vh FIX - MOBILE MENU
================================================================================
*/

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/*
================================================================================
OPEN CLOSE SEARCH
================================================================================
*/

$( document ).ready(function() {
  $( ".previousback" ).click(function() {
          javascript:history.back();
      });
});


/*
================================================================================
OPEN CLOSE SEARCH
================================================================================
*/


function openNav() {
    $("#mynav").fadeIn();
    $("#open-nav").hide();
}

function closeNav() {
    $("#mynav").fadeOut();
    $("#open-nav").show();
}


/*
================================================================================
OPEN CLOSE SEARCH
================================================================================
*/


function openMenu() {
  $("#mobmen").fadeIn();
  $("#open-menu").hide();
}

function closeMenu() {
  $("#mobmen").fadeOut();
  $("#open-menu").show();
}

/*
================================================================================
ADD WIDTH & HEIGHT ON EVERY PHOTO
================================================================================
*/
/*
add_filter( 'the_content', 'add_image_dimensions' );

function add_image_dimensions( $content ) {

    preg_match_all( '/<img[^>]+>/i', $content, $images);

    if (count($images) < 1)
        return $content;

    foreach ($images[0] as $image); {
        preg_match_all( '/(alt|title|src|width|class|id|height)=("[^"]*")/i', $image, $img );

        if ( !in_array( 'src', $img[1] ) )
            continue;

        if ( !in_array( 'width', $img[1] ) || !in_array( 'height', $img[1] ) ) {
            $src = $img[2][ array_search('src', $img[1]) ];
            $alt = in_array( 'alt', $img[1] ) ? ' alt=' . $img[2][ array_search('alt', $img[1]) ] : '';
            $title = in_array( 'title', $img[1] ) ? ' title=' . $img[2][ array_search('title', $img[1]) ] : '';
            $class = in_array( 'class', $img[1] ) ? ' class=' . $img[2][ array_search('class', $img[1]) ] : '';
            $id = in_array( 'id', $img[1] ) ? ' id=' . $img[2][ array_search('id', $img[1]) ] : '';
            list( $width, $height, $type, $attr ) = getimagesize( str_replace( "\"", "" , $src ) );

            $image_tag = sprintf( '<img src=%s%s%s%s%s width="%d" height="%d" />', $src, $alt, $title, $class, $id, $width, $height );
            $content = str_replace($image, $image_tag, $content);
        }
    }

    return $content;
}

*/


/*
================================================================================
JQUERY NTH GRANDFADER - CHILD
================================================================================
*/

  $(function() {

    // Using Jquery $( "parent > child" ); selector which returns an array of matches  
    // Iterate through an array of Jquery objects using $(..).each()
    /*$('ul > li > ul > li ').each(function(){
    
      console.log($(this).text());
      $(this).addClass('newname');
        
    });
    */

    //This adds the class to all matches as well
    $('ul > li > ul > li').addClass('newname');
    
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
    observer: true,
  observeParents: true,
  longSwipes: false,
  
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
SWIPER SINGLE PAGE + Ovo je možda rješenje za multiple swipers - test further
================================================================================
*/

   var slider = document.querySelectorAll('.swiper-container-gal')[0];
   if (slider) {
     var sliderSwiper = new Swiper(slider, {
      //loop: true,
      /* updateOnWindowResize: true, */
       init: false,
       speed: 1000,
       watchOverflow: true,
       grabCursor: true,
       longSwipes: false,
       slidesPerView: 1,
       navigation: {
        nextEl: '.swiper-button-p',
        prevEl: '.swiper-button-n',
      },
      effect: 'fade',
      updateOnWindowResize: true,

       // Options...
     });
     // Hide/Show pagination on initialization (and, if you have breakpoints, on resize)
     /*sliderSwiper.on('init resize', function() {
       var sliderRealSlides = slider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'),
         sliderPagination = slider.querySelectorAll('.swiper-pagination')[0];
       if (sliderRealSlides.length <= this.params.slidesPerView) {
         sliderPagination.style.display = 'none';
       } else {
         sliderPagination.style.display = 'block';
       }
     });*/
     sliderSwiper.init();
   }

   if($(".slider .slide").length == 1) {
    $('.swiper-wrapper').addClass( "disabled" );
    $('.swiper-pagination').addClass( "disabled" );
}








/* 
}

window.addEventListener('load', function() {
    console.log("PAGE LOADED");
	init();
});


*/



 

