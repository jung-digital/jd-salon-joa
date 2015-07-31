jd.distributeH('.os-box', 8);

var lastSelected = undefined;

jd.autoNavBox('.os-box', '.os-box-sel', 'ix', function (ix, elem) {
  var serviceElem = elem.find('.service');

  if (lastSelected)
    lastSelected.removeClass('service-selected');

  serviceElem.addClass('service-selected');
  lastSelected = serviceElem;

  var desc = serviceGroups[ix].descriptionHTML ? serviceGroups[ix].descriptionHTML : serviceGroups[ix].description;
  $('.os-content').html(desc);

  var o = $('.view-pricing').find('a');
  o.attr('href', '/services#top?s=' + ix);
}, 0, {left: -10, width: 10});

var lastSelectedMtt = undefined;

jd.autoNavBox('.mtt-box', undefined, 'ix', function (ix, elem) {
  var personElem = elem;
  personElem.removeClass('mtt-box-desel');
  personElem.addClass('mtt-box-sel');

  if (lastSelectedMtt)
  {
    lastSelectedMtt.addClass('mtt-box-desel');
    lastSelectedMtt.removeClass('mtt-box-sel');
  }

  lastSelectedMtt = personElem;

  $('.person-name').text(team[ix].name.toUpperCase() + ' /');
  $('.person-role').text(team[ix].role.toUpperCase());
  $('.person-description').text(team[ix].description);
}, 0);

jd.equalize('.logo-box', '.logo-box-link', 'height', 153);

//jd.fixToElementTop('.pink-bar', document);