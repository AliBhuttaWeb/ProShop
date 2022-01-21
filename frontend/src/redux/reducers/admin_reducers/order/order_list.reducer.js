import { Constant } from '../../../constants/admin_constants/order.constant';

const initial_state = {
    orders: []
}

export const AdminOrderListReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.FETCHING_ORDER_LIST:
            return { ...state, is_loading: true, orders: [], error: null };
        case Constant.FETCHED_ORDER_LIST:
            return { ...state, is_loading: false, orders: action.payload, error: null };
        case Constant.FETCHING_ORDER_LIST_FAILED:
            return { ...state, is_loading: false, orders: [], error: action.payload };

        default: 
            return state;
    }
}