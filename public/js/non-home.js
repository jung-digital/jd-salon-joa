jd.equalize('.logo-box', '.logo-box-link', 'height', 152);

jd.fixToElementTop('.schedule-an-appointment-fixed', document, -10, function (fixed, elem, top) {
  if (fixed) {
    elem.css('font-size', '14px');
    elem.css('height', '40px');
    elem.css('line-height', '45px');
  }
  else {
    elem.css('font-size', '18px');
    elem.css('height', '60px');
    elem.css('line-height', '60px');
  }
});

jd.fixToElementTop('.pink-bar', document);