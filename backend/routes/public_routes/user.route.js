const express = require('express');
const router  = express.Router();
const UserController = require('../../controllers/user.controller');

router.route('/login').post(UserController.userLogin);
router.route('/register').post(UserController.userRegister);

module.exports = router;