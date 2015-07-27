var keystone = require('keystone'),
  Types = keystone.Field.Types;

/**
 * Image Model
 * =============
 */

var Image = new keystone.List('Image', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Image.add({
  name: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },
  image: { type: Types.CloudinaryImage }
});

Image.register();