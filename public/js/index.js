jd.distributeH('.os-box', 8);

jd.autoNavBox('.os-box', '.os-box-sel', 'ix', function (ix) {
  $('.os-content').text(serviceGroups[ix].description);

  var o = $('.view-pricing').find('a');
  o.attr('href', '/services#top?s=' + ix);
}, 0, {left: -10, width: 10});

jd.autoNavBox('.mtt-box', '.mtt-box-sel', 'ix', function (ix) {
  $('.person-name').text(team[ix].name + ' /');
  $('.person-role').text(team[ix].role);
  $('.person-description').text(team[ix].description);
}, 0);

jd.equalize('.logo-box', '.logo-box-link', 'height', 152);