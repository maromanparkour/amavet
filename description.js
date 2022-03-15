"use strict";
var tabIndex = 1;
function changeTab(n) {
    var i;
    var tabs = document.getElementsByClassName("properties-tab_content");
    var buttons = document.getElementsByClassName("switch");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" switch-active_button", "");
    }
    tabs[n - 1].style.display = "block";
    buttons[n - 1].className += " switch-active_button";
}