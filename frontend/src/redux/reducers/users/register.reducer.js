import { Constant } from '../../constants/users';

const initial_state = {
    user: {}
}

export const UserRegisterReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.PROCESSING_REGISTER_REQUEST:
            return { is_loading: true, user: {}, error: null };
        case Constant.REGISTER_REQUEST_PROCESSED:
            return { is_loading: false, user: action.payload, error: null };
        case Constant.REGISTER_REQUEST_FAILED:
            return { is_loading: false, user: {}, error: action.payload };
        default:
            return { ...state, error: null};
    }
}