const Constant = require('../utils/constant');
const Response = require('../response/response');
const Log      = require('../utils/logger');

const adminMiddleware = async(req, res, next) => {
    try{

        if(!req.user || !req.user.is_admin){
            const code = Constant.UNAUTHORIZED;
            const msg  = Constant.NOT_AUTHORIZED_TO_PERFORM_ACTION;
            return res.json(Response.error(code, msg));
        }

        next();
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg  = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code , msg));
    }
}

module.exports = adminMiddleware;