(function(){
    "use strict";

    var currentImage = 0;
    var myImages = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg"];
    var container = document.getElementById("content");
    var prevbtn = document.getElementById('prev');
    var nextbtn = document.getElementById('next');

    function swapImages() {
        var newSlide = document.createElement("img");
        newSlide.src = myImages[currentImage];
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);

        if (container.children.length>2) {
            container.removeChild(container.children[0]);
        }
    }

    nextbtn.addEventListener("click", function(event){
        event.preventDefault();

        currentImage++;
        if (currentImage>myImages.length-1) {
            currentImage = 0;
        }
        swapImages();
    } );

    prevbtn.addEventListener("click", function(event){
        event.preventDefault();

        currentImage--;
        if (currentImage<0) {
            currentImage = myImages.length-1;
        }
        swapImages();
    } );
})();