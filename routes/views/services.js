var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res),
    locals = res.locals;

  locals.section = 'services';

  locals.header = {
    showScheduleAnAppointment: true,
    showCallout: false,
    showSocial: true
  };

  view.query('serviceGroups', keystone.list('ServiceGroup').model.find().sort('sortOrder'));

  view.render('services');
};