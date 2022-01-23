import { Form, Button } from 'react-bootstrap';

export const ProductAddForm = ({handleChange, handleSubmit, handleFileUpload}) => {
    return <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='py-2'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className='py-2'>
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" name="image" onChange={handleFileUpload}/>
            </Form.Group>

            <Form.Group className='py-2'>
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" name="brand" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className='py-2'>
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" name="category" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className='py-2'>
                <Form.Label>Price($)</Form.Label>
                <Form.Control type="number" name="price" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className='py-2'>
                <Form.Label>Available Stock</Form.Label>
                <Form.Control type="number" name="count_in_stock" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className='py-2'>
                <Form.Label>Name</Form.Label>
                <Form.Control as="textarea" name="description" rows={7} onChange={handleChange}/>
            </Form.Group>

            <Button className='my-3' type="submit">Add</Button>
        </Form>
    </>
}