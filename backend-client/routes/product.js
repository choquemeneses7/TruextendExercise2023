const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - price
 *         - category_id
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The name of the product
 *         image:
 *           type: string
 *           description: The image url of the product
 *         category_id:
 *           type: int
 *           description: category id related to the product
 *       example:
 *         id: 1
 *         name: Iphone
 *         image: https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_960_72
 *         category_id: 1
 */


/**
 * @openapi
 * /api/products:
 *   post:
 *     tags:
 *       - Products
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.post('/', productsController.createProduct);
/**
 * @openapi
 * /api/products:
 *   get:
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/', productsController.getProducts);
/**
 * @openapi
 * /api/products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/:id', productsController.getProductById);
/**
 * @openapi
 * /api/products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.delete('/:id', productsController.deleteProductById);

module.exports = router;
