import { Row } from 'react-bootstrap';
import { ProductItem } from '../product_item/product_item.component';
import { useEffect } from 'react';
import { fetchProductsList } from '../../redux/actions/products/products_list.action';
import { useDispatch, useSelector } from 'react-redux';
import {Loader} from '../loader/loader.component';
import { Toaster } from '../toaster/toaster.component';

export const ProductsList = () => {
  
    const { products, error, is_loading} = useSelector(state => state.productsList);
   
    const dispath = useDispatch();  
    

    useEffect(() => {   
        dispath(fetchProductsList());
    },[dispath]);

    return <>
        <h1>Latest Products</h1>
        {
            error ? (<Toaster message={error} error_type="error" theme_type="colored" /> )
                : ( is_loading ? <Loader /> 
                    : (
                        <Row>
                            {
                                products.map((product, indx) => (
                                    <ProductItem  product={product} key={indx}/>
                                ))
                            }
                        </Row>
                    )
                )
        }
    </>
}