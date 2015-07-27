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

  keystone.list('Content').model.find().exec(function (err, contents) {
    var byName = {};

    contents.forEach(function (s) {
      byName[s.name] = s;
    });

    locals.contents = byName;

    view.render('index');
  });

};