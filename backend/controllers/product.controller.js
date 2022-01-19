const Response = require('../response/response');
const Constant = require('../utils/constant');
const Product  = require('../database/model/product'); 
const Log      = require('../utils/logger');

const fetchAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        const data = {"products": products};
        return res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const message = Constant.SERVER_ERR_MSG;
        return res.send(Response.error(code, message));
    }
}

const fetchProductDetail = async (req, res) => {
    try{
      
        const product = await Product.findById(req.params.id);
        if(product){
            const data = {"product": product};
            return res.json(Response.success(data));
        }

        const code = Constant.NOT_FOUND;
        const message = Constant.PRODUCT_NOT_FOUND_MSG;
        return res.json(Response.error(code, message));
    }catch(error){
        Log.error(error.stack);
        if(error.message.indexOf('Cast to ObjectId failed') > -1 ){
            message =  Constant.PRODUCT_NOT_FOUND_MSG
            code = Constant.NOT_FOUND;
        }else{
            message = Constant.SERVER_ERR_MSG;//error.message; error.stack;
            code = Constant.SERVER_ERROR;
        }
        return res.send(Response.error(code, message));
    }
}

module.exports = { fetchAllProducts, fetchProductDetail };