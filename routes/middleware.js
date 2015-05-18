var _ = require('underscore');

/**
    Load configuration.
*/
var config = require('../config.json');

/**
	Initialises the standard view locals
*/

exports.initLocals = function(req, res, next) {
	
	var locals = res.locals;

	locals.navLinks = config.pages
		.filter(function (i) {return i.showInNav;})
		.map(function (i) { return {label: i.label, key: i.key, href: i.href};})	

		console.log(locals.navLinks)

	locals.user = req.user;
	
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = function(req, res, next) {
	
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	
	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;
	
	next();
	
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function(req, res, next) {
	
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
	
};
