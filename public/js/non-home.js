jd.equalize('.logo-box', '.logo-box-link', 'height', 153);

var schedule = $('.schedule-an-appointment-fixed');

$(document).scroll(documentScrollHandler);

function documentScrollHandler() {
  var st = $(window).scrollTop();

  if (st > 0) schedule.addClass('schedule-an-appointment-fixed-scrolled');
  else schedule.removeClass('schedule-an-appointment-fixed-scrolled');
}