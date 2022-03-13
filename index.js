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
    if ( document.title === "Galéria parkouru" ) {

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
        dots[i].className = dots[i].className.replace(" slideshow-dot_active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slideshow-dot_active";

    }
}



var tabIndex = 1;

function changeTab(n) {
    var i;
    var tabs = document.getElementsByClassName("properties-tab_content");
    var buttons = document.getElementsByClassName("switch");
    for(i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    for(i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" switch-active_button", "")
    }
    tabs[n - 1].style.display = "block";
    buttons[n - 1].className += " switch-active_button";
}






var modal = document.getElementById("contact-modal_win");

function showModal() {
    modal.style.display = "block";
    dajakyText = document.getElementById("caption-text");
    
    if ( !dajakyText == undefined ) {
	dajakyText.style.display = "none";
    }
}

function hideModal() {
    modal.style.display = "none";

    dajakyText = document.getElementById("caption-text");

    if ( !dajakyText == undefined ) {
	dajakyText.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
          dajakyText = document.getElementById("caption-text");
    
    if ( !dajakyText == undefined ) {
	dajakyText.style.display = "none";
    }

    }
  }
