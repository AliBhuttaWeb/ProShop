import style from './header.module.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/users/logout.action';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.userLogin);
    const logoutHandler = () => {
        dispatch(logoutUser());
        navigate('/login');
    }

    return <>
        <Navbar bg="dark" variant="dark" expand="lg" className={style['navbar-container']}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/cart">
                        <Nav.Link> <i className="fas fa-shopping-cart"></i> Cart </Nav.Link>
                    </LinkContainer>
                    {
                        user.name ? (
                            <NavDropdown title={user.name} menuVariant="dark">
                                {
                                    user.is_admin && (
                                        <>
                                            <LinkContainer to="/admin/dashboard">
                                                    <NavDropdown.Item > Dashboard </NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Divider />
                                        </>

                                    )
                                }
                               
                               <NavDropdown.Item onClick={logoutHandler}> Logout </NavDropdown.Item>
                            </NavDropdown>
                            )
                        :(
                            <LinkContainer to="/login">
                                <Nav.Link> <i className="fas fa-user"></i> Sign In</Nav.Link>
                            </LinkContainer> )
                    }
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}