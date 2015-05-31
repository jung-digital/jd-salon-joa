jd.equalize('.logo-box', '.logo-box-link', 'height', 152);

jd.autoNavBox('.os-box', '.os-box-sel', 'ix', function (ix) {
  var serviceGroup = serviceGroups[ix];

  var finalHTML = '',
      serviceTemplate = $('.service-template').clone();

  serviceGroup.services.forEach(function (sid) {
      var service = services[sid];

      serviceTemplate.find('.name').text(service.name + ' /');
      serviceTemplate.find('.description').text(service.description);
      serviceTemplate.find('.cost').text('$' + service.price);

      finalHTML += serviceTemplate.html();
  });

  console.log(finalHTML);

  $('.service-content').html(finalHTML);
});

jd.distributeH('.os-box', 30);