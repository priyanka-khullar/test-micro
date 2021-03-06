const express = require('express');
const router = express.Router();
const AuthController = require('./../api/Controllers/AuthController');

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.get('/profile', AuthController.profile);

module.exports = router;