import { Constant } from '../../../constants/admin_constants/user.constant';

const initial_state = {}

export const AdminUserDeleteReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.DELETING_USER:
            return { ...state, is_loading: true, success: false, message: null };
        case Constant.USER_DELETED:
            return { ...state, is_loading: false, success: true, message: action.payload };
        case Constant.DELETING_USER_FAILED:
            return { ...state, is_loading: false, success: false, message: null, error: action.payload };
        
        default:
            return state;
    }
}