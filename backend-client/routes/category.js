const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/category');

// Routes for Product APIs
router.get('/', categoriesController.getCategories);

module.exports = router;
