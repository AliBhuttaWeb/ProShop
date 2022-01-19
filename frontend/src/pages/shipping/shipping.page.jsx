import { ShippingStepsNav } from "../../components/shipping_steps_nav/shipping_steps_nav.component"
import { Row, Col } from 'react-bootstrap';
import { ShippingDetail } from "../../components/shipping_detail/shipping_detail.component";

export const ShippingPage = () => {
    return <>
        <Row>
            <Col sm={6} md={4} lg={4}></Col>
            <Col sm={6} md={4} lg={4}>
                <ShippingStepsNav step1/>
                <ShippingDetail />
            </Col>
            <Col sm={6} md={4} lg={4}></Col>
        </Row>
    </>
}