const express = require('express');
const router  = express.Router();
const UserController = require('../../controllers/user.controller');
const authMiddleware  = require('../../middleware/auth.middleware');
const adminMiddleware = require('../../middleware/admin.middleware');

router.use(authMiddleware, adminMiddleware);

router.route('/').get(UserController.getUsers);

module.exports = router;