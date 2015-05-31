jd.autoNavBox('.os-box', '.os-box-sel', 'ix', function (ix) {
  $('#serviceContent').text(serviceGroups[ix].description);
});

jd.autoNavBox('.mtt-box', '.mtt-box-sel', 'ix', function (ix) {
  $('.person-name').text(team[ix].name + ' /');
  $('.person-role').text(team[ix].role);
  $('.person-description').text(team[ix].description);
});

jd.equalize('.logo-box', '.logo-box-link', 'height', 152);

jd.distributeH('.os-box', 30);