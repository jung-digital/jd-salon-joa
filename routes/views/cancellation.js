var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res),
    locals = res.locals;

  locals.section = 'cancellation';

  locals.header = {
    showScheduleAnAppointment: true,
    showCallout: false,
    showSocial: false
  };

  view.render('cancellation');
};
