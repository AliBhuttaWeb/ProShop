import { combineReducers } from "redux";
import { CartReducer } from "./cart/cart.reducer";
import { OrderCreateReducer } from "./orders/create_order.reducer";
import { ProductsListReducer } from "./products/products_list.reducer";
import { ProductDetailReducer } from './products/product_detail.reducer';
import { UserLoginReducer } from "./users/login.reducer";
import { UserRegisterReducer } from "./users/register.reducer";
import { OrderDetailReducer } from './orders/order_detail.reducer';

const rootReducer = combineReducers({
    productsList: ProductsListReducer,
    productDetail: ProductDetailReducer,
    cart: CartReducer,
    userLogin: UserLoginReducer,
    userRegister: UserRegisterReducer,
    orderCreate:OrderCreateReducer,
    orderDetail: OrderDetailReducer
});

export default rootReducer;