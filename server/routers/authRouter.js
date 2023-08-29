const userController = require('../Controllers/userController');

const router = require('express').Router();

router.post('/register', userController.Register);

module.exports = router;
