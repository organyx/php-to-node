const { Schema, model, models } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  quantity: {
    type: Number
  },
  image: {
    type: String
  }
});

module.exports = models.Product || model('Product', ProductSchema);
