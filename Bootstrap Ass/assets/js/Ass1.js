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

