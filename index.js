"use strict";
let modal = document.getElementById("contact-modal_win");
let captionText = document.getElementById("caption-text");
function showModal() {
    if (modal != null) {
        modal.style.display = "block";
        if (captionText != null) {
            captionText.style.display = "none";
        }
    }
}
function hideModal() {
    if (modal != null) {
        modal.style.display = "none";
        if (captionText != null) {
            captionText.style.display = "block";
        }
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        if (modal != null) {
            modal.style.display = "none";
            if (captionText != null) {
                captionText.style.display = "block";
            }
        }
    }
};