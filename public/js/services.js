jd.distributeH('.os-box', 10);

var uvars = getUrlVars(),
    defaultService = uvars.s ? parseInt(uvars.s) : 0;

var lastSelected = undefined;

jd.autoNavBox('.os-box', '.os-box-sel', 'ix', function (ix, elem) {
  var serviceElem = elem.find('.service'),
      serviceGroup = serviceGroups[ix];

  if (lastSelected)
    lastSelected.removeClass('service-selected');

  serviceElem.addClass('service-selected');
  lastSelected = serviceElem;

  var finalHTML = '',
      serviceTemplate = $('.service-template').clone();

  // Group Description
  finalHTML = '<div class="service-group-description">' + (serviceGroup.descriptionHTML ? serviceGroup.descriptionHTML : serviceGroup.description)  + '</div>';

  // Services / Cost
  serviceGroup.services.forEach(function (sid) {
      var service = services[sid];
      serviceTemplate.find('.name').text(service.name.toUpperCase() + ' /');
  
      var desc = (service.descriptionHTML && service.descriptionHTML != '') ? service.descriptionHTML : service.description;
      serviceTemplate.find('.description').text(desc);
      if (service.priceMaximum)
      {
        var min = service.price;
        var max = service.priceMaximum;

        serviceTemplate.find('.cost').text('$' + min + ' - ' + max);
      }
      else serviceTemplate.find('.cost').text('$' + service.price);

      finalHTML += serviceTemplate.html();
  });

  $('.service-content').html(finalHTML);
}, defaultService, {left: -10, width: 10});