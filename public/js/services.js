jd.distributeH('.os-box', 10);

var uvars = getUrlVars(),
    defaultService = uvars.s ? parseInt(uvars.s) : 0;

jd.autoNavBox('.os-box', '.os-box-sel', 'ix', function (ix) {
  var serviceGroup = serviceGroups[ix];

  var finalHTML = '',
      serviceTemplate = $('.service-template').clone();

  serviceGroup.services.forEach(function (sid) {
      var service = services[sid];
      serviceTemplate.find('.name').text(service.name.toUpperCase() + ' /');
  
      var desc = (service.descriptionHTML && service.descriptionHTML != '') ? service.descriptionHTML : service.description;
      serviceTemplate.find('.description').text(desc);
      serviceTemplate.find('.cost').text('$' + service.price);

      finalHTML += serviceTemplate.html();
  });

  console.log(finalHTML);

  $('.service-content').html(finalHTML);
}, defaultService, {left: -10, width: 10});