import { Constant } from '../../../constants/admin_constants/order.constant';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getOrderList = () => async (dispatch, getState) => {
    try{
        dispatch({ type: Constant.FETCHING_ORDER_LIST });
        
        const { userLogin: { user } } = getState();
        const config = {
            headers:{
                'Content-Type': 'application/json',
                auth_token: user.token
            }
        }

        const { data } = await axios.get('/api/admin/orders', config);
        if(data.is_error){
            toast.error(data.message, { theme: 'colored'} );
            dispatch({
                type: Constant.FETCHING_ORDER_LIST_FAILED,
                payload: data.message
            });
        }else{
            dispatch({
                type: Constant.FETCHED_ORDER_LIST,
                payload: data.data.orders
            });
        }

    }catch(error){
        console.log("Order list couldn't be fetched")
    }
}