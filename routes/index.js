var keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	app.get('/', routeWrap(routes.views.index));
	app.get('/gallery', routeWrap(routes.views.gallery));
	app.all('/services', routeWrap(routes.views.services));
  app.all('/testimonials', routeWrap(routes.views.testimonials));
};

function routeWrap (routeFunc)
{
  return function (req, res)
  {
    var view = new keystone.View(req, res);

    keystone.list('Link').model.find().exec(function (err, links) {
      

      var linksByName = {};
      links.forEach(function (l) {linksByName[l.name]=l;});

      console.log(linksByName);

      res.locals.links = linksByName;

      routeFunc(req, res, view);  
    });
  };
}
