import { Constant } from "../../../constants/admin_constants/user.constant"

const initial_state = {
    users: []
}

export const AdminUserListReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.FETCHING_USER_LIST:
            return { ...state, is_loading: true, users: [], error: null };
        case Constant.FETCHED_USER_LIST:
            return { ...state, is_loading: false, users: action.payload, error: null };
        case Constant.FTECHING_USER_LIST_FAILED:
            return { ...state, is_loading: false, users: [], error: action.payload };
        default:
            return state;
    }
}