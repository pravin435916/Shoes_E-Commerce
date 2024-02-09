const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  gender: { type: String, required: true },
  price: { type: Number, required: true },
  star: { type: Number, required: true },
  brand: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
