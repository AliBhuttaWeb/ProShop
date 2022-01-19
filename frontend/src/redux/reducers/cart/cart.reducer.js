import { Constant } from '../../constants/cart';

const initia_state = {
    cartItems: [],
    shipping_address: {},
    payment_method: ''
}

export const CartReducer = ( state = initia_state, action ) => {
    switch(action.type){
        case Constant.ADD_ITEM_TO_CART:
           const currentItem = action.payload;
           const itemExists = state.cartItems.find(item => item._id === currentItem._id );

           if(itemExists){
               return {
                    ...state,
                    cartItems: state.cartItems.map( item => item._id === currentItem._id ? currentItem : item),
                    error: false,
                    item_added: true
               };
           }else{
                return {   
                    ...state,
                    cartItems: [...state.cartItems, currentItem],
                    error: false,
                    item_added: true
                };
           }
        case Constant.ADD_ITEM_TO_CART_FAILED:
            return {...state, error: action.payload, item_added: false };
        case Constant.REMOVE_ITEM_FROM_CART:
            const currentItemId = action.payload;
            return { 
                ...state,
                cartItems: state.cartItems.filter( item => item._id !== currentItemId )
            };
        case Constant.ADD_SHIPPING_ADDRESS:
            return { ...state, shipping_address: action.payload };
        case Constant.ADD_PAYMENT_METHOD:
            return { ...state, payment_method: action.payload };
        default: 
           return { ...state, error: false, item_added:false };
    }
}