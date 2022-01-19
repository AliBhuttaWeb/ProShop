import { Constant } from "../../constants/orders";

const initial_state = {
    order: {}
}

export const OrderDetailReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.FETCHING_ORDER_DETAIL:
            return { ...state, is_loading: true, order: {}, error: null };
        case Constant.FETCHED_ORDER_DETAIL:
            return { ...state, is_loading: false, order: action.payload, error: null };
        case Constant.FETCHING_ORDER_DETAIL_FAIL:
            return { is_loading: false, order: {}, error: action.payload };
        default:
            return state;
    }
}