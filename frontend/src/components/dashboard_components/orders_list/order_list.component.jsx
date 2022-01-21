import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList } from "../../../redux/actions/admin_actions/order/order_list.action";
import {Table, Button} from 'react-bootstrap';
import { Loader } from '.././../loader/loader.component';
import { OrderItem } from "../order_item/order_item.component";

export const OrderList = () => {
    const dispatch = useDispatch();
    const { is_loading, orders } = useSelector(state => state.adminOrders);
    
    useEffect( () => {
        dispatch(getOrderList());
    }, [dispatch]);

    const deleteHandler = (id) => {
        console.log("order delete handler calling for id: ", id);
    }

    return <>
        { is_loading && <Loader /> }
        <Table bordered hover>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Order Items</th>
                    <th>Buyer</th>
                    <th>Total Price</th>
                    <th>Bill Paid</th>
                    <th>Order Delivered</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map( order => <OrderItem { ...order } key={order._id} deleteHandler={ deleteHandler }/>)
                }
                
              
            </tbody>
        </Table>
    </>
}