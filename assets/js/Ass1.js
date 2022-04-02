// Aos animation script
AOS.init();


window.onload = function() {
  // Menu init
  new gnMenu( document.getElementById( 'gn-menu' ) );
  // Functions called
  Preloader();
  Desc_slider();
  swiper_user();
  login();
}

function login(){
  // Login form script
  document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popup").style.display="block";
  });
  document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup").style.display="none";
  });
}

// Description Slider
function Desc_slider(){
$(function() {

  var owl = $('.slide-one-item');

  $('.slide-one-item').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1500,
      autoplay: false,
      dots: false,
      nav: false,
      navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });

  $('.thumbnail li').each(function(slide_index){
      $(this).click(function(e) {
          owl.trigger('to.owl.carousel',[slide_index,1500]);
          e.preventDefault();
      })
  })

  owl.on('changed.owl.carousel', function(event) {
      $('.thumbnail li').removeClass('active');
      $('.thumbnail li').eq(event.item.index - 2).addClass('active');
  })
})
}

// Testimonial swipper
function swiper_user(){
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
}


function Preloader(){
  // Preloader
  let preloader = document.getElementById("preloader");
  let myVar = setInterval(myTimer ,1000);
  function myTimer() {
    preloader.style.opacity = '0';
  }
  let myVar2 = setInterval(myTimer2 ,2000);
  function myTimer2() {
    preloader.style.visibility = 'hidden';
  }  
}

// Scroll up button Js
// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
  //Get the button
  var mybutton = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};



// Product slider

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    dots: true,
	    autoplayHoverPause: true,
	    items: 1,
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

})(jQuery);