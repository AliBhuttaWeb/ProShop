const Helper   = require('../utils/helper');
const Response = require('../response/response');
const Constant = require('../utils/constant');
const User     = require('../database/model/user');

const AuthMiddleware = async (req, res, next) => {
    try{
        const token = req.headers.auth_token;

        if(!token){
            const code = Constant.UNAUTHENTICATED;
            const msg  = Constant.TOKEN_NOT_FOUND_MSG;
            return res.json(Response.error(code, msg)); 
        }
        const decodedData = Helper.decodeToken(token);
        const _id = decodedData._id;
        
        req.user = await User.findById(_id);
        next();
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg  = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code , msg));
    }
}

module.exports = AuthMiddleware;