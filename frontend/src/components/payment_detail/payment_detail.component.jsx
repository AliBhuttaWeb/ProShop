import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPaymentMethod } from '../../redux/actions/cart/cart.action';

export const PaymentDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState('paypal');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addPaymentMethod(paymentMethod));
        navigate('/order/place');
    }

    return <>
        <h1 className="py-3">Payment Detail</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className="py-2">
                <Form.Label>Payment Method</Form.Label>
                <Form.Check type="radio" name="payment_method" value="paypal" label="PayPal or Credit Card" defaultChecked onChange={(e) => setPaymentMethod(e.target.value)} required />
            </Form.Group>

            <Button type="submit" className="my-3">  Next </Button>
        </Form>
    </>
}