import { Col, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Siedbar = () => {
    return <>
        <Col sm={12} md={3} lg={3} className='py-5'>
            <ListGroup>
                <ListGroup.Item> 
                    <Link to="/admin/users">Users</Link> 
                </ListGroup.Item>
                <ListGroup.Item> 
                    <Link to="/admin/products">Products</Link> 
                </ListGroup.Item>
                <ListGroup.Item> 
                    <Link to="/admin/orders">Orders</Link> 
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </>
}