import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const ShippingStepsNav = ({step1, step2, step3}) => {
    return <>
        <Nav className="justify-content-center">
            <Nav.Item>
                {
                    step1 ? (
                        <LinkContainer to="/detail/shipping">
                            <Nav.Link> Shipping Detail </Nav.Link>
                        </LinkContainer>
                    ) : (
                        <Nav.Link disabled> Shipping Detail </Nav.Link>
                    )
                }
            </Nav.Item>

            <Nav.Item>
                {
                    step2 ? (
                        <LinkContainer to="/detail/payment">
                            <Nav.Link> Payment Detail </Nav.Link>
                        </LinkContainer>
                    ) : (
                        <Nav.Link disabled> Payment Detail </Nav.Link>
                    )
                }
            </Nav.Item>

            <Nav.Item>
                {
                    step3 ? (
                        <LinkContainer to="/order/place">
                            <Nav.Link> Place Order </Nav.Link>
                        </LinkContainer>
                    ) : (
                        <Nav.Link disabled> Place Order </Nav.Link>
                    )
                }
            </Nav.Item>
        </Nav>
    </>
}