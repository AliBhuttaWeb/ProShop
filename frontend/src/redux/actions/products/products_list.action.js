import { Constant } from "../../constants/products";
import axios from 'axios';

export const fetchProductsList = () => async(dispatch) => {
    try{
        dispatch({ type: Constant.PRODUCTS_LIST_FETCHING });

        const {data} = await axios.get('/api/products');
        
        if(data.is_error){
            dispatch({
                type: Constant.PRODUCTS_LIST_FETCHING_FAILED,
                payload: data.message
            });
        }else{
            dispatch({
                type: Constant.PRODUCTS_LIST_FETCHED,
                payload: data.data.products
            });
        }
 
    }catch(error){
        console.log("Products List could't be fecthed, please have a look at your code");
    }
}