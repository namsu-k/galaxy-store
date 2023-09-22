// JavaScript for image slideshow
var slideshow = document.getElementById("slideshow");
var images = slideshow.getElementsByTagName("img");
var prevButton = slideshow.querySelector(".prevButton");
var nextButton = slideshow.querySelector(".nextButton");
var currentIndex = 0;

showImage(currentIndex);

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = "0";
  }
  images[index].style.opacity = "1";
}

setInterval(nextImage, 3000);
nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
