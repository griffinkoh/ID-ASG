const slideshowImages = document.querySelectorAll(".img-container .animate");

const nextImageTime = 3000;
let imageCounter = 0;

slideshowImages[imageCounter].style.opacity = 1;

setInterval(nextImage, nextImageTime);

function nextImage(){
  //slideshowImages[imageCounter].style.zIndex = -2;
  const counter = imageCounter;
  setTimeout(() => {
    slideshowImages[counter].style.opacity = 0;
  }, 1000);
  imageCounter = (imageCounter + 1) % slideshowImages.length;
  slideshowImages[imageCounter].style.opacity = 1;
  //slideshowImages[imageCounter].style.zIndex = -1;
}