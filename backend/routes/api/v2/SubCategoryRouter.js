const express = require('express');

const router = express.Router();

const subcategoryController = require('../../../controllers/v2/SubCategoryController');

router.get('/', subcategoryController.getAllSubCategories);

module.exports = router



