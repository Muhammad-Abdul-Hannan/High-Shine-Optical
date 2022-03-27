// Aos animation script
AOS.init();
    
    

// Login form script
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popup").style.display="block";
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup").style.display="none";
});

/** Testimonials slider */
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


let preloader = document.getElementById("preloader");
let myVar = setInterval(myTimer ,1000);
function myTimer() {
  preloader.style.opacity = '0';
}
let myVar2 = setInterval(myTimer2 ,2000);
function myTimer2() {
  preloader.style.visibility = 'hidden';
}


// Scroll up button Js
//Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
