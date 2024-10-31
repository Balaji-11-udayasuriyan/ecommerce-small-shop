const express = require('express');

const router = express.Router();

const cartController = require('../../../controllers/v2/CartController');

router.get('/', cartController.getAllCarts);

module.exports = router;
