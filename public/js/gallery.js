$('html').click(function() {
  closeGalleryImage();
});

$('.full-screen').click(function (event) {
  event.stopPropagation();
});

function closeGalleryImage() {
  $('.full-screen').hide();
}

function resizeImage() {
  var fs = $('.full-screen');
  var img = fs.find('.image');
  var natWidth = img[0].naturalWidth;
  var natHeight = img[0].naturalHeight;

  var imgWidth = Math.min(window.innerWidth * 0.8, natWidth);
  var adj = Math.min(1, imgWidth / natWidth);
  var imgHeight = Math.min(natHeight * adj, window.innerHeight * 0.8);
  adj = imgHeight / (natHeight * adj);
  imgWidth *= adj;

  var heightPerc = (imgHeight / window.innerHeight) * 100;
  var widthPerc = (imgWidth / window.innerWidth) * 100;

  fs.css('top', (100 - heightPerc) / 2 + '%');
  fs.css('left', (100 - widthPerc) / 2 + '%');

  fs.css('width', (imgWidth + 4) + 'px');
  fs.css('height', (imgHeight + 4) + 'px');

  img.css('width', imgWidth + 'px');
  img.css('height', imgHeight + 'px');
}

$(window).resize(resizeImage);

function openImage(gid, ix) {
  var gallery = window.galleryById[gid];
  var prevIx, nextIx;
  var prevIx = ix == 0 ? gallery.images.length - 1 : ix - 1;
  var nextIx = ix == gallery.images.length - 1 ? 0 : ix + 1;

  $('.next').attr('gid', gallery._id);
  $('.next').attr('ix', nextIx);

  $('.prev').attr('gid', gallery._id);
  $('.prev').attr('ix', prevIx);

  var fs = $('.full-screen');

  fs.css('opacity', '1.0');
  fs.css('display', 'block');
  fs.css('position', 'fixed');

  var img = fs.find('.image');
  
  img.one('load', resizeImage);
  
  img.attr('src', gallery.images[ix].secure_url);
}

function nextImage(event) {
  openImage($('.next').attr('gid'), parseInt($('.next').attr('ix')));
}

function prevImage(event) {
  openImage($('.prev').attr('gid'), parseInt($('.prev').attr('ix')));
}

function openGalleryImage(event) {
  var clicked = $(event.target);
  
  openImage(clicked.attr('gid'), parseInt(clicked.attr('ix')));

  event.stopPropagation();
};
