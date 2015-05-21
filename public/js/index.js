/* Index (home) JS file */

/*---------------------------------------------------------------------*\
 * Auto nav box
 * Purpose: moves a selector div over one of many navigation items.
 * Author: Joshua Jung
 * Date: 5/20/2015
 * Requires: jQuery
\*---------------------------------------------------------------------*/
function autoNavBox(navNodesSelector, selNodeSelector, indexAttr, clickCallback)
{
  var selBoxIx = 0,
      selBoxPos = {};

  $(navNodesSelector).click(updateBoxSel);
  $(window).resize(updateBoxSelPosSize);

  function updateBoxSel() {
    selBoxIx = parseInt($(this).attr(indexAttr));

    clickCallback(selBoxIx);

    updateBoxSelPosSize();
  }

  function updateBoxSelPosSize() {
    var innerWidth = parseInt($(navNodesSelector).innerWidth()),
        selBoxPos = $(navNodesSelector + '[' + indexAttr + '=\'' + selBoxIx + '\']').position(),
        selBox = $(selNodeSelector);

    selBox.removeClass('hidden');

    selBox.css('width', innerWidth + 'px');
    selBox.css('left', selBoxPos.left + 'px');
    selBox.css('top', selBoxPos.top + 'px');
  }
}

/*----------------------------------------------------------------------*\
 * Applications of autoNavBox
\*----------------------------------------------------------------------*/
autoNavBox('.os-box', '.os-box-sel', 'ix', function (ix) {
  $('#serviceContent').text(services[ix].description);
});

autoNavBox('.mtt-box', '.mtt-box-sel', 'ix', function (ix) {
  $('.person-name').text(team[ix].name + ' /');
  $('.person-role').text(team[ix].role);
  $('.person-description').text(team[ix].description);
});