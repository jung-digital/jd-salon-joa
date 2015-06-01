var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'home';

	locals.header = {
    showScheduleAnAppointment: false,
		showCallout: true,
		showSocial: true
	};

  view.query('serviceGroups', keystone.list('ServiceGroup').model.find().sort('sortOrder'));
  view.query('team', keystone.list('Person').model.find().sort('sortOrder'));

	view.render('index');
};