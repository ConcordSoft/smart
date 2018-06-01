// Main Menu
document.getElementById("nav-toggle").addEventListener("click", open_close);
var menuState = 0
function open_close() {
	if(menuState === 0){
	  menuState = 1;
	  document.getElementById("mySidenav1").style.width = "100%";
	}
	else {
	  menuState = 0;
	  document.getElementById("mySidenav1").style.width = "0";
	}
}

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
	this.classList.toggle( "active" );
});


// Mladen script
var screen = $(window).width();
if (screen <= 768) {
	$("#demos").stop().hide();
	$("#mobile").stop().show();
	var elements = document.getElementsByClassName("skechers1");
	$(elements).removeClass("back-dos");
	$(elements).removeClass("background-fixed");
	var bic_elements = document.getElementsByClassName("back-bic");
	$(bic_elements).removeClass("back-dos");
	$(bic_elements).removeClass("background-fixed");
	var dok_elements = document.getElementsByClassName("dok-first-section");
	$(dok_elements).removeClass("back-dos");
	$(dok_elements).removeClass("background-fixed");
	var kosili_elements = document.getElementsByClassName("kosili");
	$(kosili_elements).removeClass("back-dos");
	$(kosili_elements).removeClass("background-fixed");
	var zvonko_elements = document.getElementsByClassName("zvonko-first-section");
	$(zvonko_elements).removeClass("back-dos");
	$(zvonko_elements).removeClass("background-fixed");
}

if (screen > 768) {

// Igor script
var elWidth = [];
var count = 1; 
var myId;


function scrollDown() {
  count++;
  var y = $(window).scrollTop();
  $("html, body").animate({ scrollTop: $("#" + count + "_section").offset().top }, 600);
}
 
function returnWidth(){ 
  count = 1;
  
  console.log(myId);

 if( $('.clicked').children().is('#euro-petrol') ){

    var slideWidth = $('.owl-item:not(.active)').width();
    var matrix = $('.owl-stage ').css('transform').replace(/[^0-9\-.,]/g, '').split(',');          
    var x1 = matrix[12] || matrix[4];                   
    moveRight = parseInt(x1, 10) + parseInt(slideWidth)*2;
    console.log('europetrol moveRight: ' + moveRight);
   
    rasiren = false;

    $("html, body").animate({ scrollTop: 0 }, "slow");
    setTimeout( function(){ $('.clicked').attr('style','min-height:0px').animate({width: slideWidth + 'px', height: '100vh'}, 2000).removeClass('clicked').children().empty().load('index.php #euro-petrol')},500 );
    
   

    
    $( "#backButton" ).remove(); 
    $( "#downButton" ).remove();
    $('.owl-stage').css({transitionDuration: 2250 + 'ms', transform: 'translate3d('+ moveRight +'px, 0px, 0px)', width: nWidth+'px'});
    $(".owl-prev:not(#backButton)").show();
    $(".owl-next").show();
  /* owlWidth = $('.owl-stage').width();
    console.log('ovo je sirina stage: ' + owlWidth);
    nWidth =parseInt(slideWidth)*6;
    console.log('ovo je nova sirina stage: ' + nWidth);
    $('.owl-stage').css({transitionDuration: 2250 + 'ms', width: nWidth+'px'}); */

    setTimeout( function(){ 

  var owl = $('.owl-carousel');
      owl.owlCarousel('destroy');
      owl.on('initialized.owl.carousel', function(event) {
        console.log('i tu je a ovo ispod.....');
        
                      
        
      });
      console.log('trt mrt prt');
       owl.owlCarousel({
      touchDrag: true,
      mouseDrag: true,
      pullDrag:true, 
      loop: false,
      slideBy: 3,
      smartSpeed: 1000,
      nav: true,
      navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
      responsiveClass:true,
      responsive: {
        0: {
          items: 1
        },
        769: {
          items: 3
        }
      } 
    });
     },2500 );

    window.location.hash="";

  }else if ( $('.clicked').children().is('#skechers') ){

    rasiren = false;
    var slideWidth = $('.owl-item:not(.active)').width();
           
    
     
    
    $('#dobra-ovsena-kasa').parent().removeClass('active');
   

    $("html, body").animate({ scrollTop: 0 }, "slow");
    setTimeout( function(){ $('.clicked').attr('style','min-height:0px').animate({width: slideWidth + 'px', height: '100vh'}, 2000).removeClass('clicked').children().empty().load('index.php #skechers')},500 ); 

      
   
    console.log('usao nanovo u destroy');

    $( "#backButton" ).remove();
    $( "#downButton" ).remove(); 
    $(".owl-prev:not(#backButton)").show();
    $(".owl-next").show(); 
  /* owlWidth = $('.owl-stage').width();
    console.log('ovo je sirina stage: ' + owlWidth);
    nWidth = parseInt(owlWidth, 10) - parseInt(slideWidth)*2;
    console.log('ovo je nova sirina stage: ' + nWidth);
    $('.owl-stage').css({transitionDuration: 2250 + 'ms', width: nWidth+'px'}); */
setTimeout( function(){    
  var owl = $('.owl-carousel');
      owl.owlCarousel('destroy');
      console.log('trt mrt prt');
       owl.owlCarousel({
      touchDrag: true,
      mouseDrag: true,
      pullDrag:true,
      loop: false,
      slideBy: 3,
      smartSpeed: 1000,
      nav: true,
      navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
      responsiveClass:true,
      responsive: {
        0: {
          items: 1
        },
        769: {
          items: 3
        }
      } 
    }); },2500 );
   
    window.location.hash="";

  }else{
    var slideWidth = $('.owl-item:not(.active)').width();
    var matrix = $('.owl-stage ').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    var x2 = matrix[12] || matrix[4];
    moveRight = parseInt(x2, 10) + parseInt(slideWidth);

    console.log('moveRight: ' + parseInt(x2, 10) + '+' + slideWidth);
    
    rasiren = false;
    
    console.log('ovo je sirina ostalih slideova ' + slideWidth);
    console.log('moveRight: ' + parseInt(x2, 10) + '+' + slideWidth);
    $("html, body").animate({ scrollTop: 0 }, "slow", function(){ $('.clicked').attr('style','min-height:0px').animate({width: slideWidth + 'px', height: '100vh', height: '100vh'}, 2000).removeClass('clicked').children().empty().load("index.php #" + myId + "-overlay") });

    setTimeout( function(){    
  var owl = $('.owl-carousel');
      owl.owlCarousel('destroy');
      console.log('trt mrt prt');
       owl.owlCarousel({
      touchDrag: true,
      mouseDrag: true,
      pullDrag:true, 
      loop: false,
     // URLhashListener: true,
      slideBy: 3,
      smartSpeed: 1000,
      nav: true,
      navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
      responsiveClass:true,
      responsive: {
        0: {
          items: 1
        },
        769: {
          items: 3
        }
      } 
    }); },2500 );

    $( "#backButton" ).remove(); 
    $( "#downButton" ).remove();
    $('.owl-stage').css({transitionDuration: 2250 + 'ms', transform: 'translate3d('+ moveRight +'px, 0px, 0px)', width: nWidth+'px'});
    $(".owl-prev:not(#backButton)").show();
    $(".owl-next").show();
   
       window.location.hash="";                   
  }             
        
}
      


$(document).ready(function() {
  
  rasiren = false;

  
  // var type = window.location.hash
  /* if (type !=" " && type != null){
    $(type).parent().animate({width: '100vw', height: '8000px'}, 2000,function(){$(type).load('/' + location.hash.substr(1) + '.php');}).addClass('clicked');
   } */
  // console.log(type);
   //history.pushState("", document.title, window.location.pathname);
  var owl = $('.owl-carousel');
 
        
  owl.owlCarousel({
    loop: false,
    nav: true,
    //URLhashListener: true,
    //startPosition: 'URLHash',
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    slideBy: 3,
    smartSpeed: 1000,
    navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      769: {
        items: 3
      }
    }
  });

  owl.on('mousewheel', '.owl-stage', function (e) {
    if(rasiren){
     
     $('#carousel').owlCarousel('destroy'); 
      $('#carousel').owlCarousel({touchDrag: false, mouseDrag: false});
      console.log('usao u if funkciju, rasiren true');
       
    }else{
      //console.log('skupljeni div');
      if (e.deltaY>0) {
        owl.trigger('next.owl');
      } else {
        owl.trigger('prev.owl');
      }
      e.preventDefault();
    }
  });


  var width = $(window).width();
  console.log('ovo je sirina' + width);
  $(window).on('resize', function(){
     if($(this).width() != width){
        widthElelement = $(this).width();
        elWidth.unshift(widthElelement);
        console.log('ovo je sirina iz if: ' + widthElelement);
        console.log('ovo je sirina' + width);
        
        setTimeout(function() {  console.log('ovo je sirina kliknutog: '  + $('.clicked').width()); }, 500);
        setTimeout(function() {  $('.clicked').attr('style','width:100vw;');
                                  var slideWidth = $('.owl-item:not(.active)').width();
                                  var $offLeft = $('.clicked').offset().left - $(document).scrollLeft();
                                  console.log('ovo je offLeft')
                                  owlWidth = $('.owl-stage').width();
                                  console.log(owlWidth);
                                  nWidth = parseInt(owlWidth, 10) + parseInt(slideWidth)*2;
                                  console.log('ovo je novi nWidth: ' + nWidth);
                                  var matrix = $('.owl-stage ').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                                  var x = matrix[12] || matrix[4];
                                  var moveLeft = x-$offLeft;
                                  console.log('pomeranje u levo nakon preomene: ' + moveLeft);

                                  $('.owl-stage').css({transitionDuration: 250 + 'ms', transform: 'translate3d('+ moveLeft +'px, 0px, 0px)', width: nWidth+'px'});
                               }, 1000);
        
        

     }
  });


  $('.link').on('click', function(event){

    var $this = $(this);
    var $offLeft = $(this).offset().left - $(document).scrollLeft();
    //console.log('udaljenost od leve strane ' + $offLeft);
     myId = $(this).attr('id');
    //console.log('moj id' + myId);
    var matrix = $('.owl-stage ').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    var x = matrix[12] || matrix[4];
    //console.log('kolka je tranzicija ' + x);
   // var moveLeft = x-$offLeft;
    //console.log('pomeranje u levo ' + moveLeft);
    elWidth.unshift($this.parent().width());
    //console.log('sirina je' + elWidth);
     var breakPoint = 769;

    if (width < breakPoint) {
      var moveLeft = 0;
    }else{
      var moveLeft = x-$offLeft;
    }

    console.log('pomeranje u levo ' + moveLeft);

    function loadContent() {
     
      $this.load('/' + myId + '.php');           

    }
            
            
    if($this.parent().hasClass('clicked')){
      
    }else{
      rasiren = true;
      var slideWidth = $('.owl-item:not(.active)').width();
      var breakPoint = 769;
      width = $(window).width();

      if (width < breakPoint) {
        var fullSlide = parseInt(slideWidth);
        console.log('ovo je 1 slide fs ' + fullSlide);
        console.log('ovo je 1 slide ml ' + moveLeft);
      }else{
        var fullSlide = parseInt(slideWidth) * 3;
        console.log('ovo je 3 slide fs ' + fullSlide);
        console.log('ovo je 3 slide ml ' + moveLeft);
      }
    
      owlWidth = $('.owl-stage').width();
      console.log('ovo je sirina stage: ' + owlWidth);
      nWidth = parseInt(owlWidth, 10) + parseInt(slideWidth)*2;
      console.log('ovo je nova sirina stage: ' + nWidth);
      setTimeout( function(){
      $('.owl-stage').css({transitionDuration: 2250 + 'ms', transform: 'translate3d('+ moveLeft +'px, 0px, 0px)', width: nWidth+'px'});
      // $this.parent().animate({width: fullSlide +'px'}, 2000,loadContent).addClass('clicked');
      },250 );
      
      setTimeout( function(){$this.parent().animate({width: fullSlide +'px'}, 2000,loadContent).addClass('clicked');},500);
      setTimeout(function(){ 
        var newHeight = $('.main').height();
        //console.log('visina maina '+newHeight);
        $this.parent().css('min-height', newHeight + 'px');
         }, 3500);


      var owl = $('.owl-carousel');
      owl.owlCarousel('destroy');
        owl.owlCarousel({
        touchDrag: false,
        mouseDrag: false,
        pullDrag:false, 
        loop: false,
        slideBy: 3,
        smartSpeed: 1000,
        nav: true,
        navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
        responsiveClass:true,
        responsive: {
          0: {
            items: 1
          },
          769: {
            items: 3
          }
        } 
      }); 
      

      //  setTimeout( function(){
        

     //  },1000 );

    

      $( ".owl-nav" ).append( '<button class="owl-down1 owl-back" id="downButton" onclick="scrollDown()" ><i class="material-icons">arrow_downward</i></button><button class="owl-down2" id="backButton" onclick="returnWidth()" >back</button>' );
      $(".owl-prev:not(#downButton, #backButton)").hide();
      $(".owl-next").hide();
    }
      setTimeout( function(){
     window.location.hash = myId;
     },1000 );
      
  });
});

}