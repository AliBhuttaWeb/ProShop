import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/root.reducer';

const localStorageCartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const localStorageUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}; 
const localStorageShippingAddress = localStorage.getItem("shipping_address") ? JSON.parse(localStorage.getItem("shipping_address")) : {} ;
const localStoragePaymentMethod = localStorage.getItem("payment_method") ? JSON.parse(localStorage.getItem("payment_method")) : '' ;

const initial_state = {
    "cart": {
        "cartItems": localStorageCartItems,
        "shipping_address": localStorageShippingAddress,
        "payment_method": localStoragePaymentMethod
    },
    "userLogin" : { "user": localStorageUser }
};
const middleware = [thunk];
const store = createStore( reducers, initial_state, composeWithDevTools( applyMiddleware( ...middleware ) ) );

export default store;