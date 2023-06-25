const Product = require('../../models/v1/product.model');

module.exports = {
  createProduct: async product => {
    const newProduct = new Product(product);
    const saved = await newProduct.save();
    return saved;
  },
  getProducts: async () => {
    const products = await Product.find({});
    return products;
  },
  getProductById: async id => {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');
    return product;
  },
  updateProduct: async (id, product) => {
    const { name, price, description, quantity, image } = product;
    const updatedProduct = { name, price, description, quantity, image };
    const updated = await Product.findByIdAndUpdate({ _id: id }, updatedProduct);
    return updated;
  },
  deleteProduct: async id => {
    const deleted = await Product.findByIdAndDelete({ _id: id });
    return deleted;
  }
};
