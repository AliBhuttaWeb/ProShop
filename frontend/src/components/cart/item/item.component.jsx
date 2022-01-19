import { Row, Col,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { QuantitySelector } from '../../quantity_selector/quantity_selector';
import style from './item.module.css';
import { useDispatch } from 'react-redux';
import { addItemsToCart, remveItemFromCart } from '../../../redux/actions/cart/cart.action';

export const Item = ({ _id, image, name, price, qty, count_in_stock }) => {
    const dispatch = useDispatch();

    const handleChange = (id, value) => {
        dispatch(addItemsToCart(id, value));
     }
     
     const removeItemFromCartHandler = (id) => {
        dispatch(remveItemFromCart(id));
     }
    return <>
        <Row className={`${style['cart-item-container']}`}>
           <Col sm={6} md={3} lg={3}>
                <Image src={image} rounded fluid/>
           </Col>
           <Col sm={6} md={3} lg={3}>
                <Link to={`/product/${_id}`}>
                    {name}
                </Link>
           </Col>
           <Col sm={4} md={2} lg={2}>
                ${ price }
           </Col>
           <Col sm={4} md={2} lg={2}>
                <QuantitySelector count_in_stock={count_in_stock} selected_qty={qty} handleChange={ (e) => handleChange(_id, e.target.value) } />
           </Col>
           <Col sm={4} md={2} lg={2} style={{textAlign: "end"}}>
                <i className="fas fa-trash" onClick={() => removeItemFromCartHandler(_id) }></i>
           </Col>
        </Row>
    </>
}