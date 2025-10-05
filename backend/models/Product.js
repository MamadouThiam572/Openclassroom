const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  inStock: { type: Boolean },
  price: { type: Number }
});

module.exports = mongoose.model('Product', productSchema);