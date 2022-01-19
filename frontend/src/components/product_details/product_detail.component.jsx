import style from './product_detail.module.css';
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import { Rating } from '../rating/rating.component';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../redux/actions/cart/cart.action';
import { Toaster } from '../toaster/toaster.component';
import { QuantitySelector } from '../quantity_selector/quantity_selector';

export const ProductDetail = ( { product } ) => {
    const dispatch = useDispatch();
    const { error, item_added } = useSelector(state =>  state.cart);
    const [ qty, setQty ] = useState(1);
    const {_id, image, name, rating, price, num_reviews, description, count_in_stock} = product;
    
    const handleChange = (e) => {
        setQty(e.target.value);
    }

    const addToCartHandler = (id) => {
        dispatch(addItemsToCart(id, qty));
    }

    return <>
        {error && <Toaster message="Something went wrong" error_type="error" theme_type="colored" />  }
        {item_added && <Toaster message="Item added to cart" error_type="success" theme_type="colored" /> }
        <Row className={`${ style["product-detail-container"] }  py-4`}>
            <Col sm={12} md={6} lg={6}>
                <Image src={image} className="fluid rounded" />
            </Col>
            <Col sm={6} md={3} lg={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating rating={rating} /> {num_reviews} Reviews
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Price:</b> ${price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Desription:</b> {description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col sm={6} md={3} lg={3}>
                <ListGroup >
                    <ListGroup.Item>
                        <b>Price:</b> ${price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Status:</b> {count_in_stock ? "In stock" : "Out of stock"}
                    </ListGroup.Item>

                    <ListGroup.Item> 
                        {
                            count_in_stock ?
                            (
                                <Row>
                                    <Col sm={6} md={3} lg={3}>
                                        <Form.Label>
                                            <b>Quantity:</b>
                                        </Form.Label>
                                    </Col>
                                    <Col sm={6} md={9} lg={9}>
                                        <QuantitySelector count_in_stock={count_in_stock} handleChange={handleChange} />  
                                    </Col>
                                </Row>
                            
                            ) : ''
                        }
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button className="w-100" type="button" disabled={ !count_in_stock } onClick={ () => addToCartHandler(_id) }> Add To Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </>
}