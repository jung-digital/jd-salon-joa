var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Content Model
 * =============
 */

var Content = new keystone.List('Content', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Content.add({
  name: { type: String, required: true, default: 'content' },
  content: { type: Types.Html, required: false },
  publishedDate: { type: Date, default: Date.now }
});

Content.register();
