import { ProductAdd } from '../../../components/dashboard_components/product_add/product_add.component';
import { Col } from 'react-bootstrap';

export const ProductAddPage = () => {
    return <>
        <Col sm={12} md={9} lg={9} className='py-5'>
            <h2 className='text-center'>Add a Product</h2>
            <ProductAdd />
        </Col>
    </>
}