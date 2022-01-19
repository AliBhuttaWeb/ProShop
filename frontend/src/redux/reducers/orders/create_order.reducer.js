import { Constant } from '../../constants/orders';

const initial_state = {
    order:{}
}

export const OrderCreateReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.ORDER_CREATE_REQUEST_INITIATED:
            return {...state, is_loading: true, order: {}, error: null };
        case Constant.ORDER_CREATED_SUCCESS:
            return { ...state, is_loading: false, order: action.payload, error: null };
        case Constant.ORDER_CREATE_REQUEST_FAILED:
            return { ...state, is_loading: false, order: {}, error: action.payload };
        default:
            return state;
    }
}