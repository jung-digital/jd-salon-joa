var keystone = require('keystone'),
  Types = keystone.Field.Types;

/*======================================================*\
 * Services
\*======================================================*/
var Service = new keystone.List('Service', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true,
  perPage: 500
});

Service.add({
  name: { type: String, required: true, default: 'Untitled' },
  price: { type: Number, required: false },
  priceMaximum: { type: Number, required: false },
  description: { type: String, required: false },
  descriptionHTML: { type: String, required: false },
  publishedDate: { type: Date, default: Date.now }
});

Service.register();