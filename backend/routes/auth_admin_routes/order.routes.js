const express = require('express');
const router  = express.Router();
const authMiddleware  = require('../../middleware/auth.middleware');
const adminMiddleware = require('../../middleware/admin.middleware');
const OrderController = require('../../controllers/order.controller');

router.use(authMiddleware, adminMiddleware);
router.route('/').get(OrderController.getOrders);

module.exports = router;