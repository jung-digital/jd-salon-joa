var keystone = require('keystone');

exports = module.exports = function(req, res, view) {
  locals = res.locals;

  locals.section = 'services';

  locals.header = {
    showScheduleAnAppointment: true,
    showCallout: false,
    showSocial: true
  };

  keystone.list('ServiceGroup').model.find().sort('sortOrder').exec(function (err, serviceGroups) {
    locals.serviceGroups = serviceGroups;

    keystone.list('Service').model.find().exec(function (err, services ) {
      var byID = {};

      services.forEach(function (s) {
        byID[s._id] = s;
        delete byID[s._id]._id;
      });

      locals.services = byID;

      view.render('services');
    });
  });
};