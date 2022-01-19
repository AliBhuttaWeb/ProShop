import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetail } from '../../redux/actions/orders/order_detail.action';
import style from './order_detail.module.css';
import { Loader } from '../loader/loader.component';
import { Row, Col, ListGroup,Alert, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
 
export const OrderDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { is_loading, order } = useSelector(state => state.orderDetail ); 

    const { payment_method, shipping_address, order_items, shipping_price, total_price, tax_price, user, is_paid } = order;

    useEffect(() => {
        dispatch(getOrderDetail(id));
    }, [dispatch, id]);

    const successPaymentHandler = (result) => {
        console.log("payment result", result);
    }

    return <>
        <h2 className='py-3'> Order# {id}</h2>
        { is_loading &&  <Loader /> }
        { order.shipping_address && (
            <Row className={`${style['items-list-container']} py-3`}>
                <Col sm={8} md={8} lg={8}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Shipping Address</h2>
                        <p>
                            <b>Name:</b> {user.name}
                        </p>
                        <p>
                            <b>Email:</b> <a href={`mailto:${user.email}`}> {user.email} </a>
                        </p>
                        <p>
                            <b>Address:</b> { `${shipping_address.address}, ${shipping_address.city}, ${shipping_address.postal_code}, ${shipping_address.country}` }
                        </p>
                        {
                            order.is_delivered ? 
                                <Alert variant='success'>Delivered at</Alert>
                            :
                                <Alert variant='danger'>Not yet delievered</Alert>
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <p>
                            <b>Method:</b> {payment_method}
                        </p>
                        {
                            order.is_paid ? 
                                <Alert variant='success'>Paid at {order.paid_at}</Alert>
                            :
                                <Alert variant='danger'>Not yet paid</Alert>
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                            <h2>Order Items</h2>
                            {
                                !order_items.length ?
                                    <Alert variant="info">Your cart is empty</Alert>
                                :(
                                    <ListGroup variant="flush">
                                        {
                                            order_items.map(item => (
                                                <ListGroup.Item key={item._id}>
                                                    <Row className="py-2">
                                                        <Col sm={2} md={1} lg={1}><Image src={item.image} fluid rounded /></Col>
                                                        <Col sm={5} md={6} lg={6}><Link to={`/product/${item._id}`}> {item.name} </Link> </Col>
                                                        <Col sm={5} md={5} lg={5} style={{textAlign: "right"}}> {`${item.qty} x $${item.price} = $${(item.qty * item.price).toFixed(2)}`} </Col>
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
                        <b>Total Items:</b> {order_items.length}
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
                        
                    {
                        !is_paid && (
                            <ListGroup.Item className="py-3">
                                <PayPalButton amount={total_price} onSuccess={ successPaymentHandler }/>
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
                </Col>
            </Row>
        )}
    </>
}