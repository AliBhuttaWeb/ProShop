import { ShippingStepsNav } from "../../components/shipping_steps_nav/shipping_steps_nav.component"
import { Row, Col, ListGroup, Alert, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import style from './place_order.module.css';
import { createOrder } from "../../redux/actions/orders/create_order.action";
import { Loader } from '../../components/loader/loader.component';

export const PlaceOrderPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => state.cart);
    const { is_loading, order, error } = useSelector(state => state.orderCreate); 

    const { payment_method, shipping_address, cartItems } = cart;
    const { address, city, postal_code, country } = shipping_address;

    const total_items = Number( cartItems.reduce( (acc, item) => (acc + Number(item.qty)), 0) );
    const shipping_price = 0.0;
    const total_price = Number( cartItems.reduce( (acc, item) => (acc + Number(item.qty) * item.price), 0).toFixed(2) );
    const tax_price = Number( (total_price * 0.05).toFixed(2));
    
    useEffect( () => {
        if(order._id && !error){
            navigate(`/order/${order._id}`);
        }
    }, [dispatch, order._id, error, navigate]);

    const placeOrderHandler = (e) => {
        e.preventDefault();
        dispatch(createOrder({
            order_items: cartItems,
            shipping_address,
            payment_method,
            tax_price,
            shipping_price,
            total_price
        }));
    }
   
    return <>
        <Row>
            <Col sm={6} md={4} lg={4}></Col>
            <Col sm={6} md={4} lg={4}>
                <ShippingStepsNav step1 step2 step3/>
            </Col>
            <Col sm={6} md={4} lg={4}></Col>
        </Row>
        { is_loading && <Loader />}
        <Row className={`${style['items-list-container']} py-3`}>
            <Col sm={8} md={8} lg={8}>
               <ListGroup variant="flush">
                   <ListGroup.Item>
                       <h2>Shipping Address</h2>
                       <p>
                           <b>Address:</b> { `${address}, ${city}, ${postal_code}, ${country}` }
                       </p>
                   </ListGroup.Item>

                   <ListGroup.Item>
                       <h2>Payment Method</h2>
                       <p>
                           <b>Method:</b> {payment_method}
                       </p>
                   </ListGroup.Item>

                   <ListGroup.Item>
                        <h2>Order Items</h2>
                        {
                            !cartItems.length ?
                                <Alert variant="info">Your cart is empty</Alert>
                            :(
                                <ListGroup variant="flush">
                                    {
                                        cartItems.map(item => (
                                            <ListGroup.Item key={item._id}>
                                                <Row className="py-2">
                                                    <Col sm={2} md={1} lg={1}><Image src={item.image} fluid rounded /></Col>
                                                    <Col sm={5} md={6} lg={6}><Link to={`/product/${item._id}`}> {item.name} </Link> </Col>
                                                    <Col sm={5} md={5} lg={5} style={{textAlign: "right"}}> {`${item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}`} </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))
                                    }
                                       
                                </ListGroup>
                            )

                        }
                   </ListGroup.Item>
               </ListGroup>
            </Col>
            <Col sm={4} md={4} lg={4}>
               <ListGroup>
                   <ListGroup.Item className="py-3">
                       <h2 className="text-center">Order Summary</h2>
                   </ListGroup.Item>

                   <ListGroup.Item className="py-3">
                       <b>Total Items:</b> {total_items}
                   </ListGroup.Item>

                   <ListGroup.Item className="py-3">
                       <b>Total Gross Payment:</b> ${total_price}
                   </ListGroup.Item>

                   <ListGroup.Item className="py-3">
                       <b>Shipping Price:</b> ${shipping_price}
                   </ListGroup.Item>

                   <ListGroup.Item className="py-3">
                       <b>Tax:</b> ${tax_price}
                   </ListGroup.Item>

                   <ListGroup.Item className="py-3">
                       <b>Total to Pay:</b> ${ total_price + shipping_price + tax_price }
                   </ListGroup.Item>

                   <ListGroup.Item className="py-3">
                       <Button className="w-100 py-3" onClick={placeOrderHandler}>Place Order</Button>
                   </ListGroup.Item>
               </ListGroup>
            </Col>
        </Row>
    </>
}