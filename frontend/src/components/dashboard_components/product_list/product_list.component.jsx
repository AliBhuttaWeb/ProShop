import { Table } from "react-bootstrap"
import { ProductItem } from '../product_item/product_item.component';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import { fetchProductsList } from '../../../redux/actions/products/products_list.action';

export const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state =>  state.productsList);

    useEffect( () => {
        dispatch(fetchProductsList());
    }, [dispatch]);
    
    return <>
        <Link className="my-3 btn btn-primary" to="/admin/product/add">Add Product</Link>
        <Table bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Available Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map( item => <ProductItem {...item} /> )}
               
            </tbody>
        </Table>
    </>
}