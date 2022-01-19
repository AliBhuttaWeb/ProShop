import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShippingAddress } from '../../redux/actions/cart/cart.action';

export const ShippingDetail = () => {
    const dispatch = useDispatch();
    const { shipping_address } = useSelector(state => state.cart);

    const navigate = useNavigate();
    const [state, setState] = useState({
        address: shipping_address.address,
        city: shipping_address.city,
        postal_code: shipping_address.postal_code,
        country: shipping_address.country
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addShippingAddress(state));
        navigate('/detail/payment');
    }

    return <>
        <h1 className="py-3">Shipping Detail</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className="py-2">
                <Form.Label>Address</Form.Label>
                <Form.Control type="input" name="address" onChange={ handleChange } value={state.address} required />
            </Form.Group>

            <Form.Group className="py-2">
                <Form.Label>City</Form.Label>
                <Form.Control type="input" name="city" onChange={ handleChange } value={state.city} required />
            </Form.Group>

            <Form.Group className="py-2">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="input" name="postal_code" onChange={ handleChange } value={state.postal_code} required />
            </Form.Group>

            <Form.Group className="py-2">
                <Form.Label>Country</Form.Label>
                <Form.Control type="input" name="country" onChange={ handleChange } value={state.country} required />
            </Form.Group>

            <Button type="submit" className="my-3">  Next </Button>
        </Form>
    </>
}