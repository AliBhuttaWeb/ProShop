import { Constant } from '../../constants/products';

const intitial_state = {
    products: []
};

export const ProductsListReducer = (state = intitial_state, action) => {

    switch(action.type){
        case Constant.PRODUCTS_LIST_FETCHING:
            return { ...state ,is_loading: true, products: [] };
        case Constant.PRODUCTS_LIST_FETCHED:
            return { ...state, is_loading: false, products: action.payload };
        case Constant.PRODUCTS_LIST_FETCHING_FAILED:
            return {...state, is_loading: false, error: action.payload };
        default: 
            return state;
    }

} 