import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { BackButton } from "../../components/back_button/back_button.component";
import { ProductDetail } from "../../components/product_details/product_detail.component";
import { fetchProductDetail,productDetailClear } from '../../redux/actions/products/product_detail.action';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from "../../components/loader/loader.component";
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "../../components/toaster/toaster.component";

export const ProductDetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const {product, is_loading, error} = useSelector(state =>  state.productDetail);

    useEffect(() => {
        dispatch(fetchProductDetail(id));

        return () => { //When component is destroyed(when page is left) remove it's data
            dispatch(productDetailClear());
        }

    }, [id, dispatch]);
    


    return <>
        <BackButton />
        { error ?  <>
           <Toaster message={error} error_type="error" theme_type="colored" />
            </>: (
            is_loading ? 
                <Loader />
            : (
                <ProductDetail product={product}/>
             )
        )}
    </>
}