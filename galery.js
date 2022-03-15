"use strict";
var countDownDate = new Date("Apr 29, 2022 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let countdown = document.getElementById("countdown");
    if (countdown != null) {
        countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
    if (distance < 0) {
        clearInterval(x);
        if (countdown != null) {
            countdown.innerHTML = "Šťastné výročie parkouru!!!";
        }
    }
}, 1000);
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
    var slides = document.getElementsByClassName("invisible-slides");
    if (document.title === "Galéria parkouru") {
        var dots = document.getElementsByClassName("slideshow-dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slideshow-dot_active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " slideshow-dot_active";
    }
}
