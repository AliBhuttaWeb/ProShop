const express = require('express');
const router  = express.Router();
const UserController = require('../../controllers/user.controller');
const authMiddleware = require('../../middleware/auth.middleware');

//Applying Middleware
router.use(authMiddleware);

router.route('/profile').get(UserController.userProfile);
router.route('/profile').post(UserController.updateUserProfile);


module.exports = router;