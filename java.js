let myscroll = document.querySelector(".scroll");

myscroll.onclick = function scrollDown() {
    window.scroll(0, window.scrollY + 2000);
}

let myscrollup = document.querySelector(".scroll-up");

myscrollup.onclick = function() {
    window.scroll(0, window.scrollY - 2000);
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
};





var mainListDiv = document.getElementById("container"),
    mediaButton = document.getElementById("hamburger");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};



