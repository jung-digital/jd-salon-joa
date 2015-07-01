var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Person Model
 * =============
 */

var Person = new keystone.List('Person', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true
});

Person.add({
  name: { type: String, required: true },
  role: { type: String, required: true, default: 'no role assigned' },
  description: { type: String, required: true, default: 'no description assigned'},
  publishedDate: { type: Date, default: Date.now },
  heroImage: { type: Types.CloudinaryImage }
});

Person.register();