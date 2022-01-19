import { Constant } from "../../constants/cart";
import axios from 'axios';

export const addItemsToCart = (id, qty) => async( dispatch , getState) => {
    try{
        const {data} = await axios.get(`/api/products/${id}`);
        const product = data.data.product;
        const item = {
            _id: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            count_in_stock: product.count_in_stock,
            qty
        }
        if(data.is_error){
            dispatch({
                type: Constant.ADD_ITEM_TO_CART_FAILED,
                payload: data.message
            });
        }else{
            dispatch({
                type: Constant.ADD_ITEM_TO_CART,
                payload: item
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    }catch(error){
        console.log("Product could't be added to cart, please have a look at your code", error.message);
    }
}

export const remveItemFromCart = (id) => async(dispatch, getState) => {
    try{
        dispatch({ 
            type: Constant.REMOVE_ITEM_FROM_CART,
            payload: id 
        })

        localStorage.setItem("cartItems", JSON.stringify( getState().cart.cartItems ) );
    }catch(error){
        console.log("Product could't be removed, please have a look at your code");
    }
}

export const addShippingAddress = (address) => async (dispatch) => {
    dispatch({
        type: Constant.ADD_SHIPPING_ADDRESS,
        payload: address
    });

    localStorage.setItem("shipping_address", JSON.stringify(address) );
}

export const addPaymentMethod = (method) => async (dispatch) => {
    dispatch({
        type: Constant.ADD_PAYMENT_METHOD,
        payload: method
    })

    localStorage.setItem("payment_method", JSON.stringify(method));
} 