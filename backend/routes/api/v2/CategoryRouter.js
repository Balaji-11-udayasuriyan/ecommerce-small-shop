const express = require('express');

const router = express.Router();

const categoryController = require('../../../controllers/v2/CategoryController');

router.get('/', categoryController.getAllCategories);

module.exports = router;

