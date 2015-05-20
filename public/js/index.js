/* Index (home) JS file */

//-----------------------------------------------------------
// Services Selected Box
//-----------------------------------------------------------
var selBoxIx = 0,
    selBoxPos = {};

$('.box').click(updateBoxSel);
$(window).resize(updateBoxSelPosSize);

function updateBoxSel() {
  selBoxIx = parseInt($(this).attr('ix'));

  $('#serviceContent').text($(this).find('.hidden').text());

  updateBoxSelPosSize();
}

function updateBoxSelPosSize() {
  var innerWidth = parseInt($('.box').innerWidth()),
      selBoxPos = $('.box[ix=\'' + selBoxIx + '\']').position(),
      selBox = $('.box-sel');

  selBox.removeClass('hidden');

  selBox.css('width', innerWidth + 'px');
  selBox.css('left', selBoxPos.left + 'px');
  selBox.css('top', selBoxPos.top + 'px');

}