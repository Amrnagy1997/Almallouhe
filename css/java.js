var mainListDiv = document.getElementById("container"),
    mediaButton = document.getElementById("hamburger");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
