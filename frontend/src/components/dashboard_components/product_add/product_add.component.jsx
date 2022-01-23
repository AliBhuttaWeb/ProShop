import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { ProductAddForm } from '../product_add_form/product_add_form';
import { uploadImage } from '../../../redux/actions/admin_actions/upload/image_upload.action';

export const ProductAdd = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState('');

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("state", state);
    }

    const handleFileUpload = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log("file", formData);
        dispatch(uploadImage(formData));
    }

    return <>
        <Row className='justify-content-center'>
            <Col sm={12} md={6} lg={6} > 
                <ProductAddForm  handleChange={handleChange} handleSubmit={handleSubmit} handleFileUpload={handleFileUpload} />
            </Col>
        </Row>
    </>
}