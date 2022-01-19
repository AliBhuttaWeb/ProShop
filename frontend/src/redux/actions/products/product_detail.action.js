import { Constant } from '../../constants/products';
import axios from 'axios';

export const fetchProductDetail = (id) => async ( dispatch ) => {
    try{
        dispatch({ type:Constant.PRODUCT_DETAIL_FETCHING });
        const {data} = await axios.get(`/api/products/${id}`);
       
        if(data.is_error){
            dispatch({
                type: Constant.PRODUCT_DETAIL_FETCHING_FAILED,
                payload: data.message
            });
        }else{
            dispatch({
                type: Constant.PRODUCT_DETAIL_FETCHED,
                payload: data.data.product
            });
           
        }
     
    }catch(error){
        console.log("Products List could't be fecthed, please have a look at your code");
    }
}

export const productDetailClear = () => async (dispatch) => {
    try{
        dispatch({ type:Constant.PRODUCT_DETAIL_CLEAR });
    }catch(error){
        console.log("Products List could't be fecthed, please have a look at your code");
    }
}