const mongoose = require('mongoose');
const orderSchema = require('../schema/order');

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;