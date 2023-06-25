const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/v1/product.controller');
const validate = require('../../middleware/validate');
const { createProductSchema, updateProductSchema } = require('../../validation-schemas/product.schema');

router.post('/', validate(createProductSchema), ProductController.createProduct);
router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', validate(updateProductSchema), ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
