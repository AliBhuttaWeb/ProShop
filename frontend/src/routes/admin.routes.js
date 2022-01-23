import { Routes, Route } from 'react-router-dom';
import { LoginPageAdmin } from '../pages/dashboard_pages/login/login.page';
import { OrderListPage } from '../pages/dashboard_pages/order_list/order_list.page';
import { UsersListPage } from '../pages/dashboard_pages/users_list/users_list.page';
import { ProductListPage } from '../pages/dashboard_pages/product_list/product_list.page';
import { ProductAddPage } from '../pages/dashboard_pages/product_add/product_add.page';

export const AdminRoutes = () => {
    return <>
        <Routes>
            <Route path="/admin/login" element={<LoginPageAdmin /> } />
            <Route path="/admin/users" element={<UsersListPage />} />
            <Route path="/admin/orders" element={<OrderListPage />} />
            <Route path="/admin/products" element={<ProductListPage /> } />
            <Route path="/admin/product/add" element={<ProductAddPage /> } />
        </Routes>
    </>
}