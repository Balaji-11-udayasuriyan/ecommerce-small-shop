const express = require('express');

const router = express.Router();

const productController = require('../../../controllers/v2/ProductController');

router.get('/', productController.getAllProducts);

module.exports = router;

