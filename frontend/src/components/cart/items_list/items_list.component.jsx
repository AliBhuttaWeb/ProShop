import { useSelector } from 'react-redux';
import { ListGroup, Row, Col, Button, Alert, ListGroupItem } from 'react-bootstrap';
import { Item } from '../item/item.component';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const ItemsList = () => {
    const [ totalItems, setTotalItems ] = useState(0);
    const [ grossPayment, setGrossPayment ] = useState(0);
    const [ gst, setGST ] = useState(0);
    const [ netPay, setNetPay ] = useState(0);
    const navigate = useNavigate();
    const { cartItems } = useSelector( state => state.cart );

    useEffect(() => {
        const items = cartItems.reduce( (acc, item) => (acc + Number(item.qty)),0 );
        setTotalItems(items);

        const grossPay = cartItems.reduce( (acc, item) => (acc + (Number(item.qty) *item.price ) ),0 ).toFixed(2);
        setGrossPayment(grossPay);

        const tax = (grossPay * 0.05).toFixed(2);
        setGST(tax);

        const netPayment = Number(grossPay) + Number(tax);
        setNetPay(netPayment);
    },[cartItems]);

    const proceedToCheckoutHandler = () => {
        navigate('/login?redirect=detail/shipping');
    }

    return <>
        
        <Row>
            <Col sm={12} md={8} lg={8}>
                
                    {
                        !cartItems.length ?
                            <Row className="py-3">
                                <Alert> No item found in cart</Alert>
                            </Row>
                        :(
                            <ListGroup variant="flush">
                                {
                                    cartItems.map( item => (
                                        <ListGroupItem key={item._id}>
                                            <Item {...item} />
                                        </ListGroupItem>
                                    ) )
                                }
                            </ListGroup>
                        ) 
                    }
                
            </Col>
            <Col sm={12} md={4} lg={4}>
                <ListGroup>
                    <ListGroupItem className="text-center py-3">
                        <h4>Shopping Summary</h4>
                    </ListGroupItem>
                    <ListGroupItem className="py-3">
                        <b>Total Items:</b> {totalItems}
                    </ListGroupItem>
                    <ListGroupItem className="py-3">
                        <b>Total Gross Payment:</b> ${grossPayment}
                    </ListGroupItem>
                    <ListGroupItem className="py-3">
                        <b>GST:</b> ${gst}
                    </ListGroupItem>
                    <ListGroupItem className="py-3">
                        <b>Total Net Pay:</b> ${ netPay }
                    </ListGroupItem>
                    <ListGroupItem className="py-3">
                        <Button type="button" className="bg-black w-100 py-3" onClick={ proceedToCheckoutHandler }>Proceed to Checkout</Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    </>
}