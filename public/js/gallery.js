$('html').click(function() {
  closeGalleryImage();
});

$('.full-screen').click(function (event) {
  event.stopPropagation();
});

function closeGalleryImage() {
  $('.full-screen').hide();
}
function openGalleryImage(event) {
  var clicked = $(event.target),
      cloudinaryURL = clicked.attr('cloudinaryURL');

  var fs = $('.full-screen');

  fs.css('opacity', '1.0');
  fs.css('display', 'block');

  var img = fs.find('.image');
  img.attr('src', cloudinaryURL);

  event.stopPropagation();
};