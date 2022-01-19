const Response = require('../response/response');
const Order    = require('../database/model/order');
const Log      = require('../utils/logger');
const Constant = require('../utils/constant');

exports.createOrder = async(req, res) => {
    try{
        const order = req.body;

        if(req.body.order_items && !req.body.order_items.length){
            const code = Constant.BAD_REQUEST;
            const msg  = Constant.ORDER_ITEMS_NOT_FOUND;
            return res.json(Response.error(code, msg));
        }

        const orderCreated = await Order.create({...order, user: req.user._id});

        if(!orderCreated){
            const code = Constant.UNPROCESSABLE_ENTITY;
            const msg  = Constant.ORDER_NOT_CREATED;
            res.json( Response.error(code, msg));
        }

        data = {order: orderCreated};
        res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg  = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}

exports.getOrderDetail = async(req, res) => {
    try{
        const id = req.params.id
        const order = await Order.findById(id).populate('user', 'name email');

        if(!order){
            message =  Constant.ORDER_NOT_FOUND;
            code = Constant.NOT_FOUND;
            return res.send(Response.error(code, message));
        }
        
        const data = { "order": order };
        res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        if(error.message.indexOf('Cast to ObjectId failed') > -1 ){
            message =  Constant.ORDER_NOT_FOUND;
            code = Constant.NOT_FOUND;
        }else{
            message = Constant.SERVER_ERR_MSG;
            code = Constant.SERVER_ERROR;
        }
        return res.send(Response.error(code, message));
    }
}

exports.updateOrderPaymentDetail = async(req, res) => {
    try{     
        const order = await Order.findById(req.params.id);

        if(!order){
            message =  Constant.ORDER_NOT_FOUND;
            code = Constant.NOT_FOUND;
            return res.send(Response.error(code, message));
        }
        const { is_paid, payment_result } = req.body;

        order.is_paid        = is_paid;
        order.paid_at        = Date.now();
        order.payment_result = payment_result;
        
        const updatedOrder = await order.save();

        if(!updatedOrder){
            const code = Constant.NO_CONTENT;
            const msg  = Constant.PAYMENT_DETAIL_NOT_UPDATED;
            return res.json(Response.error(code , msg));
        }

        const data = { "order": updatedOrder };
        return res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        if(error.message.indexOf('Cast to ObjectId failed') > -1 ){
            message =  Constant.ORDER_NOT_FOUND;
            code = Constant.NOT_FOUND;
        }else{
            message = Constant.SERVER_ERR_MSG;
            code = Constant.SERVER_ERROR;
        }
        return res.send(Response.error(code, message));
    }
}