const express = require('express');

const router = express.Router();

const authController = require('../../../controllers/v2/AuthController');

const authMiddleware = require('../../../middleware/AuthMiddleware');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/logout', authMiddleware, authController.logout);

module.exports = router;