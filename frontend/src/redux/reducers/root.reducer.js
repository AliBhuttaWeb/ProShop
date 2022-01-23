import { combineReducers } from "redux";
import { CartReducer } from "./cart/cart.reducer";
import { OrderCreateReducer } from "./orders/create_order.reducer";
import { ProductsListReducer } from "./products/products_list.reducer";
import { ProductDetailReducer } from './products/product_detail.reducer';
import { UserLoginReducer } from "./users/login.reducer";
import { UserRegisterReducer } from "./users/register.reducer";
import { OrderDetailReducer } from './orders/order_detail.reducer';
import { AdminUserListReducer } from "./admin_reducers/user/user_list.reducer";
import { AdminOrderListReducer } from './admin_reducers/order/order_list.reducer';
import { AdminUserDeleteReducer } from './admin_reducers/user/user_delete.reducer';
import { AdminImageUploadReducer } from "./admin_reducers/upload/image_upload/image_upload.reducer";


const rootReducer = combineReducers({
    productsList: ProductsListReducer,
    productDetail: ProductDetailReducer,
    cart: CartReducer,
    userLogin: UserLoginReducer,
    userRegister: UserRegisterReducer,
    orderCreate:OrderCreateReducer,
    orderDetail: OrderDetailReducer,
    adminUsers: AdminUserListReducer,
    adminOrders: AdminOrderListReducer,
    adminUserDelete: AdminUserDeleteReducer,
    adminImageUpload: AdminImageUploadReducer
});

export default rootReducer;