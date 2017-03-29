var images = [
{src:"Skeleton/images/DSC00759.JPG", caption: "wow"},
{src:"Skeleton/images/DSC00763.JPG", caption: "cool"},
{src:"Skeleton/images/DSC00896.JPG", caption: "sweet"},
{src:"Skeleton/images/DSC01169.JPG", caption: "dope"},
{src:"Skeleton/images/DSC01184.JPG", caption: "hello"},
{src:"Skeleton/images/DSC01189.JPG", caption: "test"},
{src:"Skeleton/images/DSC01193.JPG", caption: "caption!"},
{src:"Skeleton/images/DSC01194.JPG", caption: "yum"},
{src:"Skeleton/images/DSC01203.JPG", caption: "yay"}];

var imageIndex = 0;
var rightarrow = document.querySelector(".rightarrow");
var leftarrow = document.querySelector(".leftarrow");

function changeImage() {
  imageIndex ++;
  if (imageIndex > images.length - 1) imageIndex = 0;
  $('#slideshowImage').attr('src', images[imageIndex].src);
  $('.caption').html(images[imageIndex].caption);
};

function nextImage() {
  imageIndex ++;
  if (imageIndex > images.length - 1) imageIndex = 0;
  $('#slideshowImage').attr('src',images[imageIndex].src);
  $('.caption').html(images[imageIndex].caption);
};

function previousImage() {
    imageIndex --;
    if (imageIndex < 0) imageIndex = images.length-1;
    $('#slideshowImage').attr('src',images[imageIndex].src);
  	$('.caption').html(images[imageIndex].caption);
}

leftarrow.addEventListener("click", nextImage);
rightarrow.addEventListener("click", previousImage);

setInterval(changeImage, 4000);
