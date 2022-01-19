import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { userRegister } from '../../redux/actions/users/register.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Loader } from '../loader/loader.component';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    let { is_loading } = useSelector(state => state.userRegister);
    const { user }  = useSelector(state => state.userLogin );
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if(password !== confirmPassword){ 
            toast.error("Passwords mismatch", {
                theme: 'colored'
            });
        }else{
            dispatch( userRegister(name, email, password) );
        }
    }

    useEffect(() => {
        if(user.name){
            navigate('/');
        }
    },[dispatch, navigate, user]);

    return <>
      
        { is_loading ? <Loader /> : ''}
        <Row className="py-3">
            <Col sm={0} md={4} lg={4}></Col>
            <Col sm={12} md={4} lg={4}>
                <h2>Register</h2>
                <Form onSubmit={ submitHandler }>
                <Form.Group className="py-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={ (e) => {setName(e.target.value)} } required/>
                    </Form.Group>
                    <Form.Group className="py-2">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" onChange={ (e) => setEmail(e.target.value) } required/>
                    </Form.Group>
                    <Form.Group className="py-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={ (e) => setPassword (e.target.value) } required/>
                    </Form.Group>
                    <Form.Group className="py-2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirm_password" onChange={ (e) => setConfirmPassword (e.target.value) } required/>
                    </Form.Group>
                    <Button type="submit">Register</Button>
                </Form>
                <div className="py-2">
                    Already have an account? <Link to="/login" >Login</Link>
                </div>
            </Col>
            <Col sm={0} md={4} lg={4}></Col>
        </Row>
    </>
}