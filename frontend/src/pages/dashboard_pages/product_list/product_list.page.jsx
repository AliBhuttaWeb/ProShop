import { ProductList } from "../../../components/dashboard_components/product_list/product_list.component"
import { Col } from 'react-bootstrap';

export const ProductListPage = () => {
    return <>
        <Col sm={12} md={9} lg={9} className="py-5">
            <h2 className="text-center">Product List</h2>
            <ProductList />
        </Col>

    </>
}