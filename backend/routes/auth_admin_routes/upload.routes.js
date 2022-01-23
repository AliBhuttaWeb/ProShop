const express = require('express');
const router  = express.Router();
const authMiddleware = require('../../middleware/auth.middleware');
const adminMiddleware = require('../../middleware/admin.middleware');
const UploadController = require('../../controllers/upload.controller');
const multer  = require('multer')
const path    = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/images/')
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.use(authMiddleware, adminMiddleware);
router.route('/').post(upload.single('image'), UploadController.uploadProductImage);

module.exports = router;