const User = require('../database/model/user');
const Response = require('../response/response');
const Constant = require('../utils/constant');
const Log = require('../utils/logger');
const Helper = require('../utils/helper');

exports.userLogin = async (req, res) => {
    try{
        const { email, password } = req.body;
        var user = await User.findOne({"email": email});
        
        if(user && password && await Helper.passwordMatched(password, user.password)){

            const token = Helper.generateAuthToken({ _id: user._id, email, password });
            user = {
                _id: user._id,
                name : user.name,
                email: user.email,
                is_admin: user.is_admin,
                token: token
            }

            data = { "user": user };
            return res.json(Response.success(data));
        }

        const code = Constant.UNAUTHENTICATED;
        const msg  = Constant.INVALID_EMAIL_OR_PASSWORD_MSG;
        return res.json(Response.error(code, msg)); 

    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}

exports.userProfile = async (req, res) => {
    try{
        const { _id, name, email, is_admin } = req.user;
        const profile = { _id, name, email, is_admin }; 
        const data = { "profile": profile };
        return res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}

exports.userRegister = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const userExists = await User.findOne({"email": email});

        if(userExists){
            const code = Constant.UNPROCESSABLE_ENTITY;
            const msg  = Constant.EMAIL_ALREADY_IN_USE;
            return res.json(Response.error(code, msg));
        }
        
        let user = await User.create({
            name, 
            email, 
            password: Helper.encodePassword(password)
        });
        
        const token = Helper.generateAuthToken({"_id": user._id, email, password});
        user = {
            "_id": user._id,
            "is_admin": user.is_admin,
            name,
            email,
            token
        }

        const data = { "user": user };
        return res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}

exports.updateUserProfile = async (req, res) => {
    try{
        let user = await User.findById(req.user.id);
   
        const name    = req.body.name || user.name;
        const is_admin = req.body.is_admin || user.is_admin;

        const updatedUser = {
            name,
            is_admin
        }

        if(req.body.email){
            if(user.email != req.body.email){
                const recordFound = await User.findOne({"email": req.body.email})
                if(recordFound){
                    const code = Constant.UNPROCESSABLE_ENTITY;
                    const msg  = Constant.EMAIL_ALREADY_IN_USE;
                    return res.json(Response.error(code, msg));
                }
            }
            updatedUser.email = req.body.email;
        }else{
            updatedUser.email = user.email; 
        }
        
        if(req.body.password){
            updatedUser.password = Helper.encodePassword(req.body.password);
        }
        const recordUpdated = await User.replaceOne({_id: req.user._id}, updatedUser);
        updatedUser._id = user._id;
        
        delete updatedUser['password'];
        delete updatedUser['__v']; 
        
        const data  = { "profile": updatedUser };
        return res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}

exports.getUsers = async(req, res) => {
    try{
        const users = await User.find({"_id": {"$ne": req.user._id } });
        const data = {"users": users};
        return res.json(Response.success(data));
    }catch(error){
        Log.error(error.stack);
        const code = Constant.SERVER_ERROR;
        const msg  = Constant.SERVER_ERR_MSG;
        return res.json(Response.error(code, msg));
    }
}