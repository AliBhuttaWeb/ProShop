import style from './product_item.module.css';
import { Col,Card } from 'react-bootstrap'
import { Rating } from '../rating/rating.component';
import { Link } from 'react-router-dom';

export const ProductItem = ({product}) => {
 
    return <>
        <Col sm={12} md={3} lg={3} className={`${style['product-item']} py-3 px-3`}>
            <Card className={ `${style["min-height400"]} rounded p-2`}>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} /> 
                </Link>
                <Card.Body>
                    
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                                <b>{product.name}</b>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <Rating rating={product.rating} /> {product.num_reviews} Reviews
                    </Card.Text>   
                    <Card.Text as="h4" className="py-2">
                        ${product.price}    
                    </Card.Text>                
                </Card.Body>
            </Card>
        </Col>
    </>
} 