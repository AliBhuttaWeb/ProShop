import { Footer } from './partials/footer/footer.partial';
import { Header } from './partials/header/header.partial';
import { Container } from 'react-bootstrap';
import { HomePage } from './pages/home/home.page';
import { Routes, Route } from 'react-router-dom';
import { ProductDetailPage } from './pages/product_detail/product_detail.page';
import { CartItemsPage } from './pages/cart_items/cart_items.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ProfilePage } from './pages/profile/profile.page';
import { ShippingPage } from './pages/shipping/shipping.page';
import { ToastContainer } from 'react-toastify';
import { PaymentPage } from './pages/payment/payment.component';
import { PlaceOrderPage } from './pages/place_order/place_order.component';
import { OrderDetailPage } from './pages/order_detail/order_detail.component';
import { UsersListPage } from './pages/dashboard_pages/users_list/users_list.page';

export const App = () => {
  return (
    <>
      <Header />
        <Container className="content py-3">
        <ToastContainer />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartItemsPage /> } />
              <Route path="/login" element={<LoginPage /> } />
              <Route path="/register" element={ <RegisterPage /> } />
              <Route path="/profile" element={<ProfilePage /> } />
              <Route path="/detail/shipping" element={<ShippingPage /> } />
              <Route path="/detail/payment" element={<PaymentPage /> } />
              <Route path="/order/place" element={<PlaceOrderPage />} />
              <Route path="/order/:id" element={<OrderDetailPage /> } />
              <Route path="/dashboard" element={<UsersListPage /> } />
            </Routes>
        </Container>
      <Footer />
    </>
  );
}