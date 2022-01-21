const Constant = require('../utils/constant');

class Response{
    static code = Constant.SUCCESS;
    static message = "";
    static data = {};
    static is_error = false;
    static errors = [];

    static response() {
        
        return {
            "code" : this.code,
            "message": this.message,
            "data": this.data,
            "is_error": this.is_error,
            "errors": this.errors
        };
    }

    static resetResponse(){
        this.code = Constant.SUCCESS;
        this.message = "";
        this.data = {};
        this.is_error = false;
        this.errors = [];
    }

    static success(data, message = ""){
        this.resetResponse();
        this.data = data;
        this.message = message;
        return this.response();
    }

    static error(code, message = "", is_error = true){
        this.resetResponse();
        this.code = code;
        this.message = message;
        this.is_error = is_error;
        return this.response();
    }
}

module.exports = Response;
