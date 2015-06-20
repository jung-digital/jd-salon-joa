var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Link Model
 * =============
 */

var Link = new keystone.List('Link', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Link.add({
  name: { type: String, required: true, default: '[URL]' },
  alt: {type: String, required: false},
  uri: {type: String, required: true, default: 'http://www.salon-joa.com'},
  publishedDate: { type: Date, default: Date.now }
});

Link.defaultColumns = 'label';

Link.register();