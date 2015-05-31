var keystone = require('keystone'),
  Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var ServiceGroup = new keystone.List('ServiceGroup', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true
});

ServiceGroup.add({
  name: { type: String, required: true },
  description: { type: String, required: false },
  publishedDate: { type: Date, default: Date.now },
  services: {type: Types.Relationship, ref: 'Service', many: true}
});

ServiceGroup.register();