const { StatusCodes } = require('http-status-codes');
const ProductService = require('../../services/v1/product.service');

module.exports = {
  createProduct: async (req, res, next) => {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(StatusCodes.CREATED).json(product);
    } catch (error) {
      next(error);
    }
  },
  getProducts: async (req, res, next) => {
    try {
      const products = await ProductService.getProducts();
      res.status(StatusCodes.OK).json(products);
    } catch (error) {
      next(error);
    }
  },
  getProductById: async (req, res, next) => {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.status(StatusCodes.OK).json(product);
    } catch (error) {
      next(error);
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const product = await ProductService.updateProduct(req.params.id, req.body);
      res.status(StatusCodes.OK).json(product);
    } catch (error) {
      next(error);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const product = await ProductService.deleteProduct(req.params.id);
      res.status(StatusCodes.OK).json(product);
    } catch (error) {
      next(error);
    }
  }
};
