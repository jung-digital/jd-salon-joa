var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Testimonial Model
 * =============
 */

var Testimonial = new keystone.List('Testimonial', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Testimonial.add({
  name: { type: String, required: true },
  description: { type: String, required: true, default: 'no description assigned'},
  author: { type: String, required: true, default: 'no author assigned' },
  publishedDate: { type: Date, default: Date.now }
});

Testimonial.register();