const express = require('express');
const router  = express.Router();
const authMiddleware = require('../../middleware/auth.middleware');
const adminMiddleware = require('../../middleware/admin.middleware');
const UploadController = require('../../controllers/upload.controller');
const Helper = require('../../utils/helper');

router.use(authMiddleware, adminMiddleware);
router.route('/').post(Helper.uploadImage().single('image'), UploadController.uploadProductImage);

module.exports = router;