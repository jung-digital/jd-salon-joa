/* Index (home) JS file */

window.jd = {};

/*---------------------------------------------------------------------*\
 * getUrlVars
 * Purpose: Fix an item to the top of the screen when scrolling down
 * Author: http://stackoverflow.com/questions/4656843/jquery-get-querystring-from-url
 * Date: 5/31/2015
 * Requires: jQuery
\*---------------------------------------------------------------------*/
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

/*---------------------------------------------------------------------*\
 * fixToWindowTop
 * Purpose: Fix an item to the top of the screen when scrolling down
 * Author: Joshua Jung
 * Date: 5/31/2015
 * Requires: jQuery
\*---------------------------------------------------------------------*/
window.jd.fixToElementTop = function(fixeeSelector, parentSelector, offset, callback) {
  var elem = $(fixeeSelector),
      parentElem = $(parentSelector);

  elem.css('position', 'relative');
  elem.css('z-index', '1000');

  var origPosition = elem.position();

  $(parentElem).scroll(parentElemScrollHandler);

  function parentElemScrollHandler() {
    var st = $(window).scrollTop();

    if (st > origPosition.top)
    {
      elem.css('top', ($(window).scrollTop() + offset) + 'px');
      if (callback) callback(true, elem, st);
    }
    else
    {
      elem.css('top', origPosition.top + 'px');
      if (callback) callback(false, elem, st);
    }
  }
}

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

  var eachMarginPerc = marginTotal / (all.length - 1),
      eachWidthPerc = (100 - marginTotal) / all.length;

  all.forEach(function (t, ix) {
    $(t).css('margin-right', ((ix < all.length-1) ? eachMarginPerc : '0') + '%');
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
window.jd.autoNavBox = function(navNodesSelector, selNodeSelector, indexAttr, clickCallback, defaultIx)
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

  if (defaultIx !== undefined)
  {
    selBoxIx = defaultIx;

    clickCallback(selBoxIx);
    
    updateBoxSelPosSize();
  }
}