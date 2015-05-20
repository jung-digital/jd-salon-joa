// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

keystone.set('port', 5001);

keystone.init({
	'name': 'Salon Joa',
	'brand': 'Salon Joa',
	
	'sass': 'public',
	'static': ['public', 'node_modules/font-awesome'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'xG{X>z~Qxmc:%]SEeTD;=SUL<f!h)h<FM9RLTCg}hkhs-l1iO*bb2z"i6yVG7rsB',
    'mongo': process.env.MONGO_URI || 'mongodb://23.253.173.33/salonjoa'
});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users'
});

keystone.start();
