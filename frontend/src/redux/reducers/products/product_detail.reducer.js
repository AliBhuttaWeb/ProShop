import { Constant } from "../../constants/products"

const initial_state = {
    product: {}
}

export const ProductDetailReducer = (state = initial_state, action) => {
    switch(action.type){
        case Constant.PRODUCT_DETAIL_FETCHING:
            return { ...state, is_loading: true, product: {}, error: false }
        case Constant.PRODUCT_DETAIL_FETCHED:
            return { ...state, is_loading: false, product: action.payload, error: false };
        case Constant.PRODUCT_DETAIL_FETCHING_FAILED:
            return { ...state, is_loading: false,  product: {}, error: action.payload, };
        case Constant.PRODUCT_DETAIL_CLEAR:
            return { ...state, is_loading: false, product: {}, error: false };
        default:
            return state;
    }
}