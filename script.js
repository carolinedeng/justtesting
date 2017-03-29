var images = ["Skeleton/images/DSC00759.JPG", "Skeleton/images/DSC00763.JPG", "Skeleton/images/DSC00896.JPG", 
"Skeleton/images/DSC01169.JPG", "Skeleton/images/DSC01184.JPG", "Skeleton/images/DSC01189.JPG", "Skeleton/images/DSC01193.JPG",
"Skeleton/images/DSC01194.JPG", "Skeleton/images/DSC01203.JPG"];

var captions = ["caption1 --> 9","2", "3", "4", "5", "6", "7", "8", "9"]

var imageIndex = 0;
var rightarrow = document.querySelector(".rightarrow");
var leftarrow = document.querySelector(".leftarrow");

function changeImage() {
  imageIndex ++;
  if (imageIndex > images.length - 1) imageIndex = 0;
  $('#slideshowImage').attr('src', images[imageIndex]);
  $('.caption').html(captions[imageIndex]);
};

function nextImage() {
  imageIndex ++;
  if (imageIndex > images.length - 1) imageIndex = 0;
  $('#slideshowImage').attr('src', images[imageIndex]);
  $('.caption').html(captions[imageIndex]);
};

function previousImage() {
    imageIndex --;
    if (imageIndex < 0) imageIndex = images.length-1;
    $('#slideshowImage').attr('src', images[imageIndex]);
  	$('.caption').html(captions[imageIndex]);
}

leftarrow.addEventListener("click", nextImage);
rightarrow.addEventListener("click", previousImage);

setInterval(changeImage, 4000);
