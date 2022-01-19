import { Container, Row, Col } from 'react-bootstrap';

export const Footer = ( ) => {
    return <>
            <Container>
                <Row>
                    <Col md={12} lg={12} className="text-center">
                        <span>Copyright &copy; ProShop </span>
                    </Col>
                </Row>
            </Container>
    </>
}