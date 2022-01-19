import { Constant } from '../../constants/users';

const initial_state = {
    user: {}
}

export const UserLoginReducer = (state =  initial_state, action) => {
    switch(action.type){
        case Constant.PROCESSING_LOGIN_REQUEST:
            return { is_loading: true, user: {}, error : false };
        case Constant.LOGIN_REQUEST_PROCESSED:
            return { is_loading: false, user: action.payload, error: false };
        case Constant.LOGIN_REQUEST_FAILED:
            return { is_loading: false, user: {}, error: action.payload };
        case Constant.USER_LOGOUT_REQUEST:
            return { is_loading: false, user: {}, error : false };
        default:
            return state;
    }
}