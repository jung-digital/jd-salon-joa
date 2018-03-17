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
	app.get('/', routeWrap(routes.views.index, 'index'));
	app.get('/gallery', routeWrap(routes.views.gallery, 'gallery'));
	app.all('/services', routeWrap(routes.views.services, 'services'));
  app.all('/testimonials', routeWrap(routes.views.testimonials, 'testimonials'));
  app.all('/cancellation', routeWrap(routes.views.cancellation, 'cancellation'));
};

function routeWrap (routeFunc, pageName)
{
  return function (req, res)
  {
    var view = new keystone.View(req, res);

    keystone.list('Link').model.find().exec(function (err, links) {
      res.locals.links = map(links, 'name');

      keystone.list('Image').model.find().exec(function (err, images) {
        res.locals.images = map(images, 'name');

        if (res.locals.images[pageName + '_bg']) 
          res.locals.dynamicCSS = 'html {background-image:url(' + res.locals.images[pageName +'_bg'].image.url + ');}';
        
        routeFunc(req, res, view);  
      });
    });
  };
}

function map(list, field) {
  var _map = {};
  list.forEach(function (i) {_map[i[field]] = i;});
  return _map;
}
