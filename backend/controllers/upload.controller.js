const Constant = require('../utils/constant');
const Response = require('../response/response');
const Log      = require('../utils/logger');

exports.uploadProductImage = async(req, res) => {
    try{
        const data = {"file-name": req.file.filename, path: req.file.path};
        return res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const  msg = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}