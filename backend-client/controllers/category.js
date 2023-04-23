const Category = require('../models/category');

// Get all products
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
