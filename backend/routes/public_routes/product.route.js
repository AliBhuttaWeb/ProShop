const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/product.controller');

router.route('/').get(ProductController.fetchAllProducts); //fetch all products list
router.route('/:id').get(ProductController.fetchProductDetail); //fetch detail of a specific product

module.exports = router;