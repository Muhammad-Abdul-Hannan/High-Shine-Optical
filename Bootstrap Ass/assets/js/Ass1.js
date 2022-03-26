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


// Navbar Scroll Script
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("gn-menu").style.top = "0";
    } else {
        document.getElementById("gn-menu").style.top = "-65px";
    }
    prevScrollpos = currentScrollPos;
}


/**
   * Testimonials slider
   */
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


  /**
   * Preloader
   */
//    let preloader = select('#preloader');
//    if (preloader) {
//      window.addEventListener('load', () => {
//        preloader.remove()
//      });
//    }