import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/users/login.action';
import { Loader } from '../loader/loader.component';


export const LoginForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [state, setState] = useState('');
    const { user, is_loading } = useSelector(state => state.userLogin );
    const redirectURI = location.search ? "/"+location.search.split('=')[1] : '/'; 
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userLogin({...state}));
    }

    useEffect(() => {
        if(user.name){
           navigate(redirectURI);
        }
    }, [dispatch, user, navigate, redirectURI])

    const handleChange = (e) => {
       setState({ ...state, [e.target.name]: e.target.value });
    }

    return <>

        { is_loading ? <Loader />  : '' }
        
            <Row className="py-3">
                <Col sm={0} md={4} lg={4}></Col>
                <Col sm={12} md={4} lg={4}>
                    <h2>Sign In</h2>
                    <Form onSubmit={ submitHandler }>
                        <Form.Group className="py-2">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="py-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleChange} />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                    <div className="py-2">
                        New Customer? <Link to="/register" >Register</Link>
                    </div>
                </Col>
                <Col sm={0} md={4} lg={4}></Col>
            </Row>
    </>
}