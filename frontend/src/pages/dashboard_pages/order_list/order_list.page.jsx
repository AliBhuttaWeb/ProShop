import { Col } from 'react-bootstrap';
import { OrderList } from '../../../components/dashboard_components/orders_list/order_list.component';

export const OrderListPage = () => {
    return <>
        <Col sm={12} md={9} lg={9} className='py-5'>
            <h2 className='text-center'>Orders List</h2>
            <OrderList />
        </Col>
    </>
}