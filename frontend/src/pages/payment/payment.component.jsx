import { ShippingStepsNav } from "../../components/shipping_steps_nav/shipping_steps_nav.component"
import { Row, Col } from 'react-bootstrap';
import { PaymentDetail } from "../../components/payment_detail/payment_detail.component";

export const PaymentPage = () => {
    return <>
        <Row>
            <Col sm={6} md={4} lg={4}></Col>
            <Col sm={6} md={4} lg={4}>
                <ShippingStepsNav step1 step2/>
                <PaymentDetail/>
            </Col>
            <Col sm={6} md={4} lg={4}></Col>
        </Row>
    </>
}