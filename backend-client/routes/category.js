const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/category');


/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *       example:
 *         id: 1
 *         name: Electronics
 */

/**
 * @openapi
 * /api/categories:
 *   get:
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.get('/', categoriesController.getCategories);

module.exports = router;
