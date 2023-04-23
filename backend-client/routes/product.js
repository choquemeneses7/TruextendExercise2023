const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

// Routes for Product APIs
router.post('/', productsController.createProduct);
router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductById);
router.delete('/:id', productsController.deleteProductById);
router.get('/category/:id', productsController.getProductsByCategoryId);

module.exports = router;
