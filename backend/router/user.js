const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

router.post('/', UserController.create);

module.exports = router;