const express = require('express');
const router  = express.Router();
const authMiddleware = require('../../middleware/auth.middleware');
const OrderController = require('../../controllers/order.controller');

router.use(authMiddleware);
router.route('/create').post(OrderController.createOrder);
router.route('/:id').get(OrderController.getOrderDetail);
router.route('/:id/update/payment/detail').post(OrderController.updateOrderPaymentDetail);

module.exports = router;
