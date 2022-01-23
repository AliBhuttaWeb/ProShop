const Constant = require('../utils/constant');
const Response = require('../response/response');
const Log      = require('../utils/logger');

exports.uploadProductImage = async(req, res) => {
    try{
        const data = { filename: req.file.filename, path: req.file.path };
        const msg  = Constant.IMAGE_UPLOADED;
        return res.json(Response.success(data, msg));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const  msg = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}