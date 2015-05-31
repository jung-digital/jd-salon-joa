/* Index (home) JS file */

window.jd = {};

/*---------------------------------------------------------------------*\
 * Distribute
 * Purpose: Redistributes divs horizontally based on their count, by applying
 * percentage widths and margins.
 * Author: Joshua Jung
 * Date: 5/31/2015
 * Requires: jQuery
\*---------------------------------------------------------------------*/
window.jd.distributeH = function(selector, marginTotal) {
  var all = $.makeArray($(selector));

  var eachMarginPerc = Math.floor(marginTotal / all.length),
      eachWidthPerc = Math.floor((100 - marginTotal) / all.length);

  all.forEach(function (t, ix) {
    $(t).css('margin-right', eachMarginPerc + '%');
    $(t).css('width', eachWidthPerc + '%');
  });
}

/*---------------------------------------------------------------------*\
 * Equalize
 * Purpose: makes a property of one div equal to another
 * Author: Joshua Jung
 * Date: 5/24/2015
 * Requires: jQuery
\*---------------------------------------------------------------------*/
window.jd.equalize = function(sourceSelector, targetSelector, prop, offset) {
  $(window).resize(equalize_windowResizeHandler);

  offset = offset || 0;

  function equalize_windowResizeHandler() {
    var src = $(sourceSelector);
    var target = $(targetSelector);

    $.makeArray(target).forEach(function (t) {
      $(t).css(prop, (parseFloat(src.css(prop)) + offset) + 'px');
    })
    
  }

  equalize_windowResizeHandler();
}

/*---------------------------------------------------------------------*\
 * Auto nav box
 * Purpose: moves a selector div over one of many navigation items.
 * Author: Joshua Jung
 * Date: 5/20/2015
 * Requires: jQuery
\*---------------------------------------------------------------------*/
window.jd.autoNavBox = function(navNodesSelector, selNodeSelector, indexAttr, clickCallback)
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